import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiegoService } from '../services/riego.service';

import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-nodo',
  templateUrl: './nodo.page.html',
  styleUrls: ['./nodo.page.scss'],
})
export class NodoPage implements OnInit, OnDestroy {


  private valorObtenido:number=0;
  public myChart: any;
  private chartOptions: any;
  valveState: boolean = false;

  numeroNodo: any



  
  constructor(private _riegoService: RiegoService, private _actRouter: ActivatedRoute) {

    setTimeout(()=>{
      console.log("Cambio el valor del sensor");
      this.valorObtenido=60;
      //llamo al update del chart para refrescar y mostrar el nuevo valor
      this.myChart.update({series: [{
          name: 'kPA',
          data: [this.valorObtenido],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
    },6000);

   }

  ngOnInit() {
  }
  
  

  ionViewWillEnter () {
    console.log(`Me llegó el id: ${Number(this._actRouter.snapshot.paramMap.get('id'))}`)
    this.numeroNodo = Number(this._actRouter.snapshot.paramMap.get('id'))
    this.generarChart();    
  }  

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: `Sensor N° ${this.numeroNodo}`
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }
  

  ngOnDestroy(): void {

  }  

  ChangeState(){
    this.valveState = !this.valveState;
    console.log(this.valveState);

    if(this.valveState){
      console.log("Abriendo valvula");
      this.InsertLogRiego()      
    } else{
    console.log("Cerrando valvula");

    }
  } 
  
  InsertLogRiego(){
    console.log("Insertando log de riego");
    this._riegoService.putRiegoById(this.numeroNodo)
  .then((response) => {
    console.log(response);
  }) 
  .catch((error) => {
    console.log(error)
  })

  }



}
