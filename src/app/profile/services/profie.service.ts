import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expirence } from '../interface/expirence.interface';
import { Observable } from 'rxjs';
import { Email } from '../interface/email.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfieService {

  private readonly baseUrl = 'https://felipceballos.up.railway.app'

  constructor(private http: HttpClient) { }

  sendEmail( sendEmail: Email ) {
    const url = `${this.baseUrl}/work-expierence/email`

    return this.http.post<Email>(url, sendEmail)
  }


  getWorks(): Observable<Expirence[]>{
    const url = `${ this.baseUrl }/work-expierence`;

    return this.http.get<Expirence[]>(url);
  }
}

