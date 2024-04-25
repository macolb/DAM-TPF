import { Component, OnDestroy, OnInit } from '@angular/core';

import { RiegoService } from '../services/riego.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-riego',
  templateUrl: './riego.page.html',
  styleUrls: ['./riego.page.scss'],
})
export class RiegoPage implements OnInit, OnDestroy {

  listaRiego: any[] = []
  numeroNodo: any  

  constructor(private _riegoService: RiegoService, private _actRouter: ActivatedRoute) { }

  async ngOnInit() {

    this.numeroNodo = Number(this._actRouter.snapshot.paramMap.get('id'))  

    //console.log(`Estoy usando this.numeroNodo: ${this.numeroNodo}`)

    await this._riegoService.getRiegoById(this.numeroNodo)
      .then((riego) => {
        this.listaRiego = riego
        console.log(riego)
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
