import {AfterViewInit, Component, ElementRef, ViewChild, LOCALE_ID} from "@angular/core";

import * as Chart from 'chart.js';

import {Lote} from "./entry.interface";

@Component({
  selector: 'boveda-component',
  styleUrls: ['boveda.component.scss'],
  providers:[{ provide: LOCALE_ID, useValue: "es" }],
  template: `

    <div class="uk-flex uk-flex-between">
      <h1>Boveda</h1>
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
    
    <section class="uk-section uk-section-small">
      <div class="uk-card uk-card-default uk-card-body uk-padding-small">
        <h3>Lotes en boveda</h3>
        <div class="uk-margin-small-top">
          
        </div>
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
            <td><button class="uk-button uk-button-primary">Editar</button></td>
          </tr>


          </tbody>
        </table>
      </div>
    </section>
  
  `
})
export class BovedaComponent implements AfterViewInit{

  chartConfig: any = {
    type: 'bar',
    data: {
      labels: ["Oro", "Plata"],
      datasets: [{
        label: 'Cantidad de material (KG)',
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
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  };

  lotes: Lote[]= [
    {
      id: 1,
      entry_price: 2349,
      material: "Oro",
      checkInDate: Date.now(),
      presentation: "Barra",
      quantity: 20,
    },
    {
      id: 2,
      entry_price: 2349,
      material: "Plata",
      checkInDate: Date.now(),
      presentation: "Polvo",
      quantity: 30,
    },
    {
      id: 3,
      entry_price: 23449,
      material: "Oro",
      checkInDate: Date.now(),
      presentation: "Granalla",
      quantity: 10,
    }
  ];

  @ViewChild('MaterialChart') chart: ElementRef;

  ngAfterViewInit(){
    new Chart(this.chart.nativeElement, this.chartConfig);
  }

}
