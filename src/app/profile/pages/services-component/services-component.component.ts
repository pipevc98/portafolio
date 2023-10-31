import { Component } from '@angular/core';

@Component({
  selector: 'app-services-component',
  templateUrl: './services-component.component.html',
  styleUrls: ['./services-component.component.css']
})
export class ServicesComponentComponent {

  services = [
    {title: 'FrontEnd', image: '../../../../assets/frontend.jpg', desc: 'Desarrollo de applicaciones web a medida con los frameworks de Angular y React'},
    {title: 'Diseño Web', image: '../../../../assets/web-design.png', desc: 'Diseño para tu web app con un interfaz agradable para los usuarios'},
    {title: 'BackEnd', image: '../../../../assets/backend.jpg', desc: 'BackEnd robusto y escalable con Nestjs o .net ajustado a tus necesidades'},
  ]

}
