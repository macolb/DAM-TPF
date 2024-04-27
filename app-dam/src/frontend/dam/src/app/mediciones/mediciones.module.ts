import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicionesPageRoutingModule } from './mediciones-routing.module';

import { MedicionesPage } from './mediciones.page';
import { ModDataPipe } from '../pipes/mod-data.pipe';
import { ColorearDirective } from '../directives/colorear.directive';

import { EditDatePipe } from '../pipes/edit-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicionesPageRoutingModule
  ],
  declarations: [MedicionesPage, ModDataPipe, EditDatePipe, ColorearDirective]
})
export class MedicionesPageModule {}
