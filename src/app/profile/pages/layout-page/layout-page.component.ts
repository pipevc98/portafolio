import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: []
})
export class LayoutPageComponent {
  
  mostrarEnPantallasGrandes = true
  constructor(private router:Router){}

  public sidebarItems = [
    {label: 'Home', icon: 'home', URL: './list'}, 
    { label: 'My Work', icon: 'work', URL: './my-work' },
    { label: 'About Me', icon: 'person', URL: './about-me' },
    { label: 'Resume', icon: 'contact_page', URL: './resume' }
  ]

  


}
