import { Component, OnDestroy, OnInit } from '@angular/core';

import { RiegoService } from '../services/riego.service';

@Component({
  selector: 'app-riego',
  templateUrl: './riego.page.html',
  styleUrls: ['./riego.page.scss'],
})
export class RiegoPage implements OnInit, OnDestroy {

  listaRiego: any[] = []

  constructor(private _riegoService: RiegoService) { }

  async ngOnInit() {
    await this._riegoService.getRiego()
      .then((riego) => {
        this.listaRiego = riego
        console.log(riego)
      })
      .catch((error) => {
        console.log(error)
      })
    //console.log('Me ejecuto primero')
  }

  ngOnDestroy(): void {
  }

}
