import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor (private fb: FormBuilder, private authService: AuthService, private router: Router) {}

   public hide = true;

   loginForm: FormGroup = this.fb.group({
    email: ['pipevc98.1@gmail.com', [ Validators.required,  Validators.email ]],
    password: ['FDE19C13ED', [ Validators.required, Validators.minLength( 6 ) ]]
   });

   login() {
    //Obtener los valores del formulario
    const { email, password } = this.loginForm.value;

    this.authService.login( email, password ).subscribe({
      next: () => this.router.navigateByUrl( '/dashboard' ),

      error: (message => {
        Swal.fire( 'Error', message, 'error' )
      })
    })
    
   }
   
}
