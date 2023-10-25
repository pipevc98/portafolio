import { Component } from '@angular/core';
import { ProfieService } from '../../services/profie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mail-component',
  templateUrl: './mail-component.component.html',
  styleUrls: ['./mail-component.component.css']
})
export class MailComponentComponent {

  constructor(private profileService: ProfieService, private fb: FormBuilder){
    console.log(this.emailForm);
  }

  emailForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    email: ['', [ Validators.required ]],
  });

  sendEmail() {
    const sendEmail = this.emailForm.value;

    // this.profileService.sendEmail( sendEmail ).subscribe()

    this.emailForm.reset('');

    console.log(this.emailForm);
  }

}
