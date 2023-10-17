import { Component, inject, computed, effect, Inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { authStatus } from './auth/interfaces/auth-status.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio1.0';

  private authService = inject( AuthService );
  private router = inject( Router );

  public finishedAuthCheck =  computed<boolean>( () => {
    console.log( this.authService.authStatus() );
    if( this.authService.authStatus() ===  authStatus.checking ){
      return false;
    }

    return true
  });

  public authStatusChangedEffect = effect( () => {

    switch( this.authService.authStatus() ){

      case authStatus.checking:
        return;

      case authStatus.authenticated:
        this.router.navigateByUrl('/dashboard');
        return;

      
    }
  });
  
}
