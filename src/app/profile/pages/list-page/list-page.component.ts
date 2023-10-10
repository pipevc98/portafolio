import { Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: []
  
})
export class ListPageComponent {

  socialMedia = [
    {label: 'LinkedIn', url: 'https://www.linkedin.com/in/felipe-valdovinos-404434218/', image: '../../../../assets/linkedin.png'},
    {label: 'WhatsApp', url: 'https://wa.me/5213121766525', image: '../../../../assets/whatsapp.png'},
    {label: 'Gmail', url: 'mailto:pipevc98@gmail.com?subject=Desarrollo Web&body=Hola, estoy interesado en contactarme contigo', image: '../../../../assets/gmail.png'},
  ]

}
