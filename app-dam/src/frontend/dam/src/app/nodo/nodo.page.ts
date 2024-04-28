import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiegoService } from '../services/riego.service';
import { MedicionesService } from '../services/mediciones.service';
import { Observable, Subscription, interval } from 'rxjs';

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

  //observableMedicion$: Observable<any>
  //Subscription: Subscription

  private valorObtenido:number=0;
  public myChart: any;
  private chartOptions: any;

  numeroNodo: any
  valveState: any
  valormedicion: any
  public ultimaMedicion:number = 0;

  constructor(private _medicionesService: MedicionesService, private _riegoService: RiegoService, private _actRouter: ActivatedRoute) {


    //Entiendo que con un Dispositivo real, la medicion se actualiza mediante una interrupcion de un Broker o una API, 
    //pero queria aprovechar el observable para simular el cambio de medicion cada 10 segundos en caso de tener que 
    //medir cada cierto tiempo
    /*
    this.observableMedicion$ = interval(10000)
    this.Subscription = this.observableMedicion$.subscribe(() => {
      this.updateChartValue()
    })
    */    
  
    setTimeout(()=>{
      console.log("Cambio el valor del sensor por");
      console.log(this.ultimaMedicion);
      this.myChart.update({series: [{
          name: 'kPA',
          data: [Number(this.ultimaMedicion)],          
          //data: [20],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
    },3000);
    
   }

   async ngOnInit() {

     console.log('Consigo la medicion del Dispositivo')
    
      await this._medicionesService.getUltimaMedicionById(Number(this._actRouter.snapshot.paramMap.get('id')))
      .then((medicion) => {
        this.ultimaMedicion = medicion[0].valor
        console.log(`ultima medicion: ${this.ultimaMedicion}`)
      })
      .catch((error) => {
        console.log(error)
      })

     console.log('Consigo el estado de valvula del Dispositivo')

      await this._riegoService.getUltimoEstadoById(Number(this._actRouter.snapshot.paramMap.get('id')))
      .then((estado) => {
        this.valveState = estado[0].estado
        console.log(`ultima estado: ${this.valveState}`)
      })
      .catch((error) => {
        console.log(error)
      })

  }
  

  ionViewWillEnter () {  
    this.numeroNodo = Number(this._actRouter.snapshot.paramMap.get('id'))
    this.generarChart(); 
    this.updateChartValue();   
  }  

  ionViewWillLeave () {
    //console.log('no me olvido de desubscribirme del observable')
    //this.Subscription.unsubscribe() 
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
        data: [0],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }
  

  ChangeState(){

    this.valveState = !this.valveState;     //Cambio estado de valvula

    /*
    Preferi mandar tanto el ON como el OFF a la base de datos 
    y cambiar la variable por estado
    */
    this.InsertLogRiego()   //Actualizo el estado de la valvula en la base de datos  

    if(this.valveState){
      console.log("Abriendo valvula");     
    } else{
      console.log("Cerrando valvula");

      console.log("Insertando Medicion");
      this.valormedicion = Math.floor(Math.random() * (100));        
      this.InsertMedicion();    //Log de Medicion    
      
      /*
      this.CambiarMedicion();           ahora se llama desde InsertLogRiego() para que se llame solo despues de que haya terminado
      */      

      //this.updateChartValue();       //Queda implementada la funcion con el observable
    }


  } 
  
  async InsertLogRiego(){
    await this._riegoService.putRiegoById(this.numeroNodo, this.valveState)
  .then((response) => {
    console.log("Insert Riego Log");
  }) 
  .catch((error) => {
    console.log(error)
  })
  }

  async InsertMedicion(){
    await this._medicionesService.putMedicionById(this.numeroNodo, this.valormedicion)
  .then((response) => {
    console.log("Insert Medicion");
    this.CambiarMedicion();
  }) 
  .catch((error) => {
    console.log(error)
  })

  }

  async CambiarMedicion(){    
    console.log(`Busco ultima medicion de id: ${Number(this._actRouter.snapshot.paramMap.get('id'))}`); 

    await this._medicionesService.getUltimaMedicionById(Number(this._actRouter.snapshot.paramMap.get('id')))
    .then((medicion) => {
      this.ultimaMedicion = medicion[0].valor
      console.log(`Obtuve la medicion: ${this.ultimaMedicion}`); 

      //Actualizo el Widget del Sensor
      this.myChart.update({series: [{
        name: 'kPA',
        data: [Number(this.ultimaMedicion)],          
        //data: [33],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]});

    })
    .catch((error) => {
      console.log(error)
    })    

  }  

  
  updateChartValue() {       
    console.log(`Cambio el valor del Widget sensor por ${this.ultimaMedicion}`);
      console.log(this.ultimaMedicion);

      this.myChart.update({series: [{
        name: 'kPA',
        data: [Number(this.ultimaMedicion)],          
        //data: [80],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]});

  }

  ngOnDestroy(): void {
    //this.Subscription.unsubscribe()
  }  


}
