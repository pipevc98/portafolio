import { Component, Input, OnInit } from '@angular/core';
import { Expirence } from '../../interface/expirence.interface';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styles: [
  ]
})
export class CardComponentComponent implements OnInit {

  @Input()
  public expirence!: Expirence;

  ngOnInit(): void {
    if(!this.expirence) throw Error('Expirence property is required');
  }
  
  
  
}
