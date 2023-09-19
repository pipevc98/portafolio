import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styles: [
  ]
})
export class ResumePageComponent {


  public workExpirence = [
    {span: 'Angular', porcentaje: 70},
    {span: 'NodeJs', porcentaje: 40},
    {span: '.NET', porcentaje: 30},
  ];

}
