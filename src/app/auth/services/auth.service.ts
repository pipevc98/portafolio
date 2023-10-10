import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { authStatus } from '../interfaces/auth-status.enum';
import { LoginResponse } from '../interfaces/login-response.interface';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { checkTokenResponse } from '../interfaces/check-token.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl : string = 'http://localHost:3000'
  
  private _currentUser = signal<User | null>( null );
  private _authStatus = signal<authStatus>( authStatus.checking ); 

  public currenUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );

  constructor(private http: HttpClient) { 
    this.checkAuthStatus().subscribe();
  }

  private setAuth(user: User,  token: string) {
    this._currentUser.set( user );
    this._authStatus.set( authStatus.authenticated );
    localStorage.setItem( 'token', token );

    return true;
  }

  login( email: string, password: string){

    const url = `${ this.baseUrl }/auth/login`;

    const body = { email, password };

    return this.http.post<LoginResponse>( url, body).pipe(
      //Si todo sale bien mapeamos y asignamos el valor a la funcion sethAuth
      map( ({user, token}) => this.setAuth( user, token ) ),
      //Errores
      catchError( err => { return throwError( () => err.error.message ) })
    );
  }


  checkAuthStatus(): Observable<boolean>{
    //Tomamos el URL
    const url = `${this.baseUrl}/auth/check-token`;

    const token = localStorage.getItem( 'token' );

    console.log(token);

    if ( !token ) {
      this.logOut();
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${ token }`);

    return this.http.get<checkTokenResponse>( url, { headers }).pipe(
      map( ({ user, token}) => this.setAuth( user, token ) ),
      //Error
      catchError( () => {
        this._authStatus.set( authStatus.notAuthenticated );
        return of( false );
      })
    );
  }

  logOut() {
    localStorage.removeItem('token');

    this._currentUser.set(null);

    this._authStatus.set( authStatus.notAuthenticated )
  }


}
