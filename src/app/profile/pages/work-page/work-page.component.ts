import { Component, inject, OnInit } from '@angular/core';
import { ProfieService } from '../../services/profie.service';
import { Expirence } from '../../interface/expirence.interface';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styles: [
  ]
})
export class WorkPageComponent  implements OnInit {

  private profileService = inject(ProfieService);

  public works: Expirence[] = []

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.profileService.getWorks().subscribe( works => this.works = works);
  }


}

