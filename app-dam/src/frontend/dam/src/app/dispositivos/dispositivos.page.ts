import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service';


@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit, OnDestroy {

  listaDispositivos: any[] = []

  constructor(private _dispositivoService: DispositivoService) {
  }

  async ngOnInit() {
    await this._dispositivoService.getDispositivos()
      .then((dispositivos) => {
        this.listaDispositivos = dispositivos
        console.log(dispositivos)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  CrearDisp () {
    console.log('Crear un Dispositivo Nuevo')
  }

  DeleteDisp () {
    console.log('Eliminar un Dispositivo')    
  }

  ngOnDestroy(): void {
  }
}
