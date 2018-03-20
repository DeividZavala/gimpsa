import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import * as UIkit from 'uikit';

@Component({
  selector: 'boveda-addOrder',
  styleUrls: ['boveda-addOrder.component.scss'],
  template: `

    
    <button class="uk-button uk-button-default uk-margin-small-right btn-succes" type="button" uk-toggle="target: #add-order">Crear lote</button>

    <!-- This is the modal with the default close button -->
    <div id="add-order" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-width-1-2">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">Alta Ingreso</h2>
        
        <form class="uk-form-stacked" [formGroup]="form">
          <div class="uk-child-width-1-2 uk-grid-small" uk-grid>

            <div class="">
              <label class="uk-form-label" for="entry-lote">Lote</label>
              <div class="uk-form-controls">
                <input class="uk-input" id="entry-lote" type="number" placeholder="Número de lote" formControlName="id">
              </div>
            </div>

            <div class="">
              <label class="uk-form-label" for="entry-price">Precio de entrada</label>
              <div class="uk-form-controls">
                <input class="uk-input" id="entry-price" type="number" min="0" step="" placeholder="Precio de entrada" formControlName="entry_price">
              </div>
            </div>

            <div class="">
              <label class="uk-form-label" for="entry-price">Cantidad</label>
              <div class="uk-form-controls">
                <input class="uk-input" id="entry-price" type="number" placeholder="Cantidad en gramos" formControlName="quantity">
              </div>
            </div>

            <div class="">
              <label class="uk-form-label" for="entry-date">Fecha de ingreso</label>
              <div class="uk-form-controls">
                <input class="uk-input" id="entry-date" type="date" formControlName="checkInDate">
              </div>
            </div>

            <div class="">
              <label class="uk-form-label" for="form-stacked-select">Cliente</label>
              <div class="uk-form-controls">
                <select class="uk-select" id="form-stacked-select" formControlName="client">
                  <option value="" selected>Cliente</option>
                  <option [value]="client.id" *ngFor="let client of clientes">{{client.name}}</option>
                  
                </select>
              </div>
            </div>

            <div class="">
              <label class="uk-form-label" for="form-stacked-select">Material</label>
              <div class="uk-form-controls">
                <select class="uk-select" id="form-stacked-select" formControlName="material">
                  <option value="" selected>Material</option>
                  <option *ngFor="let material of materials" [value]="material.name">{{material.name}}</option>
                </select>
              </div>
            </div>

            <div class="">
              <label class="uk-form-label" for="form-stacked-select">Servicio</label>
              <div class="uk-form-controls">
                <select class="uk-select" id="form-stacked-select" formControlName="service">
                  <option value="" selected>Servicio</option>
                  <option *ngFor="let service of services" [value]="service.name" >{{service.name}}</option>
                </select>
              </div>
            </div>

            <div class="">
              <label class="uk-form-label" for="entry-presentation">Presentación</label>
              <div class="uk-form-controls">
                <input class="uk-input" id="entry-presentation" type="text" formControlName="presentation">
              </div>
            </div>

            <div class="uk-width-1-1">
              <label class="uk-form-label" for="entry-presentation">Descripción</label>
              <div class="uk-form-controls">
                <textarea class="uk-textarea" rows="5" placeholder="" formControlName="description"></textarea>
              </div>
            </div>

          </div>
          
          <button 
            class="uk-button btn-succes uk-button-default uk-margin-small uk-float-right" 
            type="button"
            (click)="onAdded()">
            Crear Lote
          </button>
          
        </form>
        
      </div>
    </div>
  
  `
})
export class BovedaAddOrderComponent{

  @Input()
  clientes: any[];

  @Input()
  services: any[];

  @Input()
  materials: any[];

  @Output()
  addedLot = new EventEmitter<any>();

  @Output()
  lotCreated = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder
  ){}

  form = this.fb.group({
    id: null,
    entry_price: null,
    material: null,
    checkInDate: null,
    quantity: null,
    presentation: null,
    service: null,
    client: null,
    description: null
  });

  onAdded(){
    this.form.value.checkInDate = Date.parse(this.form.value.checkInDate);
    this.addedLot.emit(this.form.value);
    this.lotCreated.emit({user: "David", "type": "creo", target:this.form.value.id, target_type:"Lote"});
    UIkit.modal('#add-order').hide();
    this.form.reset({
      id: null,
      entry_price: null,
      material: null,
      checkInDate: null,
      quantity: null,
      presentation: null,
      service: null,
      client: null,
      description: null
    });
  }

}
