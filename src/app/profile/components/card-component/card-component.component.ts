import { Component, Input, OnInit } from '@angular/core';
import { expirence } from '../../interface/expirence.interface';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styles: [
  ]
})
export class CardComponentComponent implements OnInit {

  @Input()
  public expirence!: expirence;

  ngOnInit(): void {
    if(!this.expirence) throw Error('Expirence property is required');
  }
  
}
