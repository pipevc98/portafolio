import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { workExperience } from '../interfaces/workExperience.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly baseUrl : string = 'https://felipceballos.up.railway.app'

  constructor(private http:  HttpClient) { 
  }

  createWorkExpirence(workExpierence: workExperience): Observable<workExperience> {

    const token = localStorage.getItem('token');

    if(!token) throw new Error;

    const url = `${ this.baseUrl }/work-expierence`;

    const body = workExpierence;

    console.log(body);
    return this.http.post<workExperience>(url,  body)

  }

  getWorkExpirence() {

  }
}
