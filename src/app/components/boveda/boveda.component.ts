import {AfterViewInit, Component, ElementRef, ViewChild} from "@angular/core";

import * as Chart from 'chart.js';

@Component({
  selector: 'boveda-component',
  styleUrls: ['boveda.component.scss'],
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
              <td>12 kg</td>
              <td>{{28000 | currency:"MXN": true}}</td>
            </tr>
            <tr>
              <td>Plata</td>
              <td>19 kg</td>
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
    
    <section class="uk-section">
      <table class="uk-table uk-table-divider">
        <thead>
        <tr>
          <th>Lote</th>
          <th>Precio de entrada</th>
          <th>Material</th>
          <th>Fecha Ingreso</th>
          <th>Presentación</th>
          <th>Estatus</th>
          <th>Cantidad</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>0001</td>
          <td>{{2345 | currency:"MXN":true}}</td>
          <td>Table Data</td>
          <td>Table Data</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>0002</td>
          <td>{{233445 | currency:"MXN":true}}</td>
          <td>Table Data</td>
          <td>Table Data</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>0003</td>
          <td>{{6345 | currency:"MXN":true}}</td>
          <td>Table Data</td>
          <td>Table Data</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
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

  @ViewChild('MaterialChart') chart: ElementRef;

  ngAfterViewInit(){
    new Chart(this.chart.nativeElement, this.chartConfig);
  }

}
