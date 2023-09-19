import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ExampleComponent } from '../example/example.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
