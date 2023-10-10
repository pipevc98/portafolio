import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AboutmePageComponent } from './pages/aboutme-page/aboutme-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'home', component: ListPageComponent},
      {path: 'about-me', component: AboutmePageComponent},
      {path: 'resume', component: ResumePageComponent},
      {path: 'my-work', component: WorkPageComponent},
      {path: '**', redirectTo:  'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
