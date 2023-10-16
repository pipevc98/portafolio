import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { workExperience } from '../../interfaces/workExperience.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styles: [
  ]
})
export class DashboardPageComponent {

  get currentWork(): workExperience {
    const work = this.expirenceForm.value  as workExperience

    return work;
  }


  constructor ( private fb: FormBuilder, private dashboardService: DashboardService, private router: Router ) {}

  expirenceForm: FormGroup = this.fb.group({
    nameCompany: ['', [Validators.required]],
    puesto: ['', [Validators.required]],
    initDate: ['', [Validators.required, Validators.maxLength(4)]], 
    endDate: ['', [Validators.required, Validators.maxLength(4)]],
    desc: [ '', [Validators.required, Validators.minLength( 20 ) ]],
    altImage: [''],
    url: [''],
  })

  onSubmit(){

    this.dashboardService.createWorkExpirence( this.currentWork ).subscribe( work => {
      
      
      
      Swal.fire(
        'Carta de Experiencia creada',
        `Creaste ${work.nameCompany}`,
        'success'
      )
    } )

    
    this.expirenceForm.markAllAsTouched();

    this.expirenceForm.reset()


    
  }

}
