import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiegoService {

  constructor(private _http: HttpClient) { }

  getRiego (): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/riegos'))
  }
}
