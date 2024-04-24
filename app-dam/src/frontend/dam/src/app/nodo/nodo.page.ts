import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nodo',
  templateUrl: './nodo.page.html',
  styleUrls: ['./nodo.page.scss'],
})
export class NodoPage implements OnInit, OnDestroy {

  constructor(private _actRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter () {
    console.log(`Me llegó el id: ${Number(this._actRouter.snapshot.paramMap.get('id'))}`)
  }  

  ngOnDestroy(): void {

  }  

}
