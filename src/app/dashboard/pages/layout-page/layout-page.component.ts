import { Component, computed } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  constructor( private authService: AuthService, private router: Router) {}

  public user = computed(() => this.authService.currenUser() );


  onLogout() {
    this.authService.logOut();
    this.router.navigateByUrl('/auth/login')
  }
}
