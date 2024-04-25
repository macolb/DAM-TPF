import { Component, OnDestroy, OnInit } from '@angular/core';

import { MedicionesService } from '../services/mediciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit, OnDestroy {

  listaMediciones: any[] = []
  numeroNodo: any

  constructor(private _medicionesService: MedicionesService, private _actRouter: ActivatedRoute) { }

  async ngOnInit() {
    await this._medicionesService.getMediciones()
      .then((mediciones) => {
        this.listaMediciones = mediciones
        console.log(mediciones)
      })
      .catch((error) => {
        console.log(error)
      })
    //console.log('Me ejecuto primero')
  }

  ionViewWillEnter () {
    console.log(`Me llegó el id: ${Number(this._actRouter.snapshot.paramMap.get('id'))}`)
    this.numeroNodo = Number(this._actRouter.snapshot.paramMap.get('id'))   
  }   

  ngOnDestroy(): void {
  }

}
