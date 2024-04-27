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

  getUltimoEstadoById(dispositivoId: number): Promise<any> {
    console.log(`Obtener ultimo estado de id:${dispositivoId}`)
    return firstValueFrom(this._http.get('http://localhost:8000/riego', { params: { dispositivoId: dispositivoId.toString() } }))
  }     

  putRiegoById(electrovalvulaId: number, stateValve:number): Promise<any> {
    console.log(`${electrovalvulaId}`)
    return firstValueFrom(this._http.put('http://localhost:8000/riego', { electrovalvulaId, stateValve }) )
  } 

}
