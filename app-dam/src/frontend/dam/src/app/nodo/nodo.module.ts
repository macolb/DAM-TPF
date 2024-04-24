import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NodoPageRoutingModule } from './nodo-routing.module';

import { NodoPage } from './nodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NodoPageRoutingModule
  ],
  declarations: [NodoPage]
})
export class NodoPageModule {}
