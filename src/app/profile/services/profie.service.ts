import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expirence } from '../interface/expirence.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfieService {

  private readonly baseUrl = 'https://felipceballos.up.railway.app'

  constructor(private http: HttpClient) { }


  getWorks(): Observable<Expirence[]>{
    const url = `${ this.baseUrl }/work-expierence`;

    return this.http.get<Expirence[]>(url);
  }
}

