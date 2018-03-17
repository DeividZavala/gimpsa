import {AfterViewInit, Component, ElementRef, ViewChild, LOCALE_ID} from "@angular/core";

import * as Chart from 'chart.js';

import {Lote} from "./entry.interface";

@Component({
  selector: 'boveda-component',
  styleUrls: ['boveda.component.scss'],
  providers:[{ provide: LOCALE_ID, useValue: "es" }],
  template: `

    <div class="uk-flex uk-flex-between">
      <h2>Bóveda</h2>
      <boveda-addOrder></boveda-addOrder>
    </div>
    <div class="uk-child-width-1-2 uk-grid-small uk-grid-match" uk-grid>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title uk-margin-remove-top">Materiales en KG</h3>
          <canvas id="MaterialChart" width="" height="" #MaterialChart></canvas>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title uk-margin-remove-top">Dinero en Material</h3>
          <table class="uk-table uk-table-small uk-table-divider">
            <thead>
            <tr>
              <th>Material</th>
              <th>Cantidad (kG)</th>
              <th>Costo</th>
              
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Oro</td>
              <td>12 Kg</td>
              <td>{{28000 | currency:"MXN": true}}</td>
            </tr>
            <tr>
              <td>Plata</td>
              <td>19 Kg</td>
              <td>{{18000 | currency:"MXN": true}}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td></td>
              <td class="uk-text-bold">{{46000 | currency:"MXN": true}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <section class="uk-section uk-section-small uk-padding-remove-bottom">
      <div class="uk-card uk-card-default uk-card-body uk-padding-small">
        <h3>Lotes en boveda</h3>
        
        <table class="uk-table uk-table-divider uk-table-middle">
          <thead>
          <tr>
            <th>Lote</th>
            <th>Precio de entrada</th>
            <th>Material</th>
            <th>Fecha Ingreso</th>
            <th>Presentación</th>
            <th>Estatus</th>
            <th>Cantidad</th>
            <th>Servicio</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let lote of lotes ">
            <td>{{lote.id}}</td>
            <td>{{lote.entry_price | currency:'MXN'}}</td>
            <td>{{lote.material}}</td>
            <td>{{lote.checkInDate | date: 'MMMM d, y'}}</td>
            <td>{{lote.presentation}}</td>
            <td class="uk-text-primary">{{lote.status ? lote.status : "En Proceso"}}</td>
            <td>{{lote.quantity}} Kg</td>
            <td>{{lote.service}}</td>
            <td><button class="uk-button uk-button-primary">Editar</button></td>
          </tr>


          </tbody>
        </table>
      </div>
    </section>

    <section class="uk-section uk-section-small uk-padding-remove-bottom">
      <div class="uk-grid-small uk-grid-match" uk-grid>
        
        <div class="uk-width-3-5">
          <div class="uk-card uk-card-default uk-card-body uk-padding-small">
            <h3>Procesos Activos</h3>
            
            <table class="uk-table uk-table-divider uk-table-middle">
              <thead>
              <tr>
                <th>Lote</th>
                <th>Peso Muestra</th>
                <th>Material</th>
                <th>Area</th>
                <th>Proceso</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr *ngFor="let proceso of Procesos">
                <td>{{proceso.id}}</td>
                <td>0.{{proceso.muestra}} g</td>
                <td>{{proceso.material}}</td>
                <td>{{proceso.area}}</td>
                <td>{{proceso.type}}</td>
                <td><button class="uk-button uk-button-primary">Editar</button></td>
              </tr>
              
              </tbody>
            </table>
            
          </div>
        </div>
        
        <div class="uk-width-2-5">
          <div class="uk-card uk-card-default uk-card-body uk-padding-small">

            <h3>Actividad reciente</h3>

            <table class="uk-table uk-table-divider uk-table-middle">
              <thead>
              <tr>
                <th>Usuario</th>
                <th>Acción</th>
                <th>Elemento</th>
              </tr>
              </thead>
              <tbody>
              <tr *ngFor="let action of actions">
                
                <td>{{action.user}}</td>
                <td class="uk-text-uppercase" [ngClass]="{'uk-text-warning': (action.type === 'edito'), 'uk-text-success': (action.type==='creo')}" >{{action.type}}</td>
                <td>{{action.target_type}} {{action.target}}</td>
                
              </tr>


              </tbody>
            </table>
            
          </div>
        </div>
        
      </div>
    </section>
  
  `
})
export class BovedaComponent implements AfterViewInit{

  chartConfig: any = {
    scaleSteps: 5,
    type: 'bar',
    data: {
      labels: ["Oro", "Plata"],
      datasets: [{
        label: ['Cantidad de material (KG)'],
        data: [12, 19],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            stepSize: 5
          }
        }]
      }
    }
  };

  Procesos = [{
    id: 1,
    muestra: 234,
    material: "Oro",
    area: "Laboratorio",
    type: "Analisis"
  }];

  actions = [
    {user:"Juan", type: "edito", target:"A123", target_type: "Analisis"},
    {user: "Maria", "type": "creo", target:"1", target_type:"Lote"}
  ];

  lotes: Lote[]= [
    {
      id: 1,
      entry_price: 2349,
      material: "Oro",
      checkInDate: Date.now(),
      presentation: "Barra",
      quantity: 20,
      service: "Analisis"
    },
    {
      id: 2,
      entry_price: 2349,
      material: "Plata",
      checkInDate: Date.now(),
      presentation: "Polvo",
      quantity: 30,
      service: "Fundición"
    },
    {
      id: 3,
      entry_price: 23449,
      material: "Oro",
      checkInDate: Date.now(),
      presentation: "Granalla",
      quantity: 10,
      service: "Analisis"
    }
  ];

  @ViewChild('MaterialChart') chart: ElementRef;

  ngAfterViewInit(){
    new Chart(this.chart.nativeElement, this.chartConfig);
  }

}
