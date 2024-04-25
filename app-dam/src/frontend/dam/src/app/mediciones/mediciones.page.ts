import { Component, OnDestroy, OnInit } from '@angular/core';

import { MedicionesService } from '../services/mediciones.service';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit, OnDestroy {

  listaMediciones: any[] = []

  constructor(private _medicionesService: MedicionesService) { }

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

  ngOnDestroy(): void {
  }

}
