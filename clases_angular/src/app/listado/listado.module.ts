import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerService } from '../services/logger.service';
import { ElevarPipe } from '../pipes/elevar.pipe';
import { ColorearDirective } from '../directives/colorear.directive';


@NgModule({
  declarations: [ListadoComponent, ElevarPipe, ColorearDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ListadoComponent],
  providers: [LoggerService]
})
export class ListadoModule { }
