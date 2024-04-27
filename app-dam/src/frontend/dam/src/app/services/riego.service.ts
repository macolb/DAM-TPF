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

  putRiegoById(dispositivoId: number, stateValve:boolean): Promise<any> {
    console.log(`Nuevo estado de riego de ${dispositivoId}`)
    return firstValueFrom(this._http.put('http://localhost:8000/riego', { dispositivoId, stateValve }) )
  } 
  

}
