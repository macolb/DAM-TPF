import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {

  constructor(private _http: HttpClient) { }

  getMediciones (): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/mediciones'))
  }

  getMedicionesById(dispositivoId: number): Promise<any> {
    console.log(`${dispositivoId}`);
    return firstValueFrom(this._http.get(`http://localhost:8000/mediciones/${dispositivoId}`));
  } 

  getUltimaMedicionById(dispositivoId: number): Promise<any> {
    console.log(`Obtener ultima medicion de id:${dispositivoId}`);
    return firstValueFrom(this._http.get('http://localhost:8000/mediciones', { params: { dispositivoId: dispositivoId.toString() } }));
  }   

  putMedicionById(electrovalvulaId: number, valorSens: number): Promise<any> {
    console.log(`Nueva medicion de id:${electrovalvulaId}`);
    return firstValueFrom(this._http.put('http://localhost:8000/mediciones', { electrovalvulaId, valorSens }));
  }   

}
