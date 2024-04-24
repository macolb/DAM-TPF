import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NodoPage } from './nodo.page';

const routes: Routes = [
  {
    path: '',
    component: NodoPage
  },
  {
    path: ':id', // /nodo/id
    component: NodoPage
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NodoPageRoutingModule {}
