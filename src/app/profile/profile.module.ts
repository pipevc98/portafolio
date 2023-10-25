import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { AboutmePageComponent } from './pages/aboutme-page/aboutme-page.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MailComponentComponent } from './pages/mail-component/mail-component.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    CardComponentComponent,
    AboutmePageComponent,
    WorkPageComponent,
    ResumePageComponent,
    MailComponentComponent


    
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
