import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiegoService {

  constructor(private _http: HttpClient) { }

  getRiego (): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/riego'))
  }

  getRiegoById(dispositivoId: number): Promise<any> {
    console.log(`${dispositivoId}`)
    return firstValueFrom(this._http.get(`http://localhost:8000/riego/${dispositivoId}`))
  }    

  putRiegoById(electrovalvulaId: number): Promise<any> {
    console.log(`${electrovalvulaId}`)
    return firstValueFrom(this._http.put('http://localhost:8000/riego', { electrovalvulaId }) )
  } 

}
