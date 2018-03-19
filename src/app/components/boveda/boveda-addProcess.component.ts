import {Component, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {AppService} from "../app.service";

interface Element {
  [key: string]: any
}

@Component({
  selector: 'boveda-addProcess',
  styleUrls: ['boveda-addProcess.component.scss'],
  template: `

    <button class="uk-button uk-button-default uk-margin-small-right uk-button-primary" type="button" uk-toggle="target: #add-process">Crear Proceso</button>

    
    <div id="add-process" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-width-1-2">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">Crear Proceso</h2>

        <form class="uk-form-stacked" [formGroup]="form">
          <div class="uk-child-width-1-2 uk-grid-small" uk-grid>

            <div class="">
              <label class="uk-form-label" for="process-lot">Lote</label>
              <div class="uk-form-controls">
                <select class="uk-select" id="process-lot" formControlName="lote" (change)="getLot($event.target.value)">
                  <option value="" selected>Seleccionar lote</option>
                  <option *ngFor="let lot of Batches" >{{lot.id}}</option>
                </select>
              </div>
            </div>

            <div class="">
              <label class="uk-form-label" for="process-weight">Peso Muestra (Inicial)</label>
              <div class="uk-form-controls">
                <input class="uk-input" id="process-weight" type="number" min="0" step="" placeholder="Peso muestra" formControlName="initial_weigth">
              </div>
            </div>


            <div class="">
              <label class="uk-form-label" for="process-material">Material</label>
              <div class="uk-form-controls">
                <select class="uk-select" id="process-material" formControlName="material">
                  <option value="" selected>Seleccionar Material</option>
                  <option *ngFor="let material of Materials" >{{material.name}}</option>
                </select>
              </div>
            </div>

            <div class="">
              <label class="uk-form-label" for="process-area">Area</label>
              <div class="uk-form-controls">
                <select class="uk-select" id="process-area" formControlName="area" (change)="onAreaChange($event.target.value)" >
                  <option value="" selected>Seleccionar Area</option>
                  <option *ngFor="let area of Areas" [value]="area.name" >{{area.name}}</option>
                </select>
              </div>
            </div>

            <div class="">
              <label class="uk-form-label" for="process-process">Proceso</label>
              <div class="uk-form-controls">
                <select class="uk-select" id="process-process" formControlName="process">
                  <option value="" selected>Seleccionar Proceso</option>
                  <option *ngFor="let process of Processes" >{{process}}</option>
                </select>
              </div>
            </div>
            
            
            <div>

              <label class="uk-form-label" >Elementos a analizar</label>
              <div class="uk-form-controls uk-responsive-height">
                <div class="uk-grid-small uk-child-width-auto uk-grid uk-flex-middle uk-height-1-1">
                  <label *ngFor="let elem of elemntList.controls; let i=index"><input class="uk-checkbox" [formControl]=elem type="checkbox"> {{Elements[i].symbol}}</label>
                </div>
              </div>
              
            </div>

          </div>

          <button
            class="uk-button btn-succes uk-button-default uk-margin-small uk-float-right"
            type="button"
            (click)="onAdded(form.value)">
            Crear Proceso
          </button>

        </form>

        <pre>{{form.value | json}}</pre>

      </div>
    </div>
  
  
  `
})
export class BovedaAddProcessComponent implements OnInit{

  constructor(
    private fb: FormBuilder,
    private as: AppService
  ){}

  Batches: any[];
  Areas: any[];
  Materials: any[];
  Processes: any[];

  ngOnInit(){
    this.Batches = this.as.getBatches();
    this.Areas = this.as.getAreas();
    this.Materials = this.as.getMaterials();
  }

  Elements: Element[] = [
    {name: "Platino",id:1,symbol: 'Pt', selected: false},
    {name: "Plata",id:2,symbol: 'Ag', selected: false},
    {name: "Oro",id:3,symbol: 'Au', selected: false}
  ];

  form = this.fb.group({
    lote: null,
    initial_weigth: null,
    material: null,
    area: '',
    process: null,
    elements: this.buildElements()
  });

  buildElements(){
    const arr = this.Elements.map(e => {
      return this.fb.control(e.selected);
    });
    return this.fb.array(arr);
  }

  get elemntList() {
    return this.form.get('elements');
  };

  getLot(lot: string){
    this.form.patchValue({"lote": parseInt(lot)});
  }

  onAreaChange(area: string){
    this.Areas.map(a => a.name === area ? this.Processes = a.processes : []);
  }

  onAdded(form: any){
    const formValue = Object.assign({}, form, {
      elements: form.elements.map((selected: boolean, i: number) => {
        if(this.Elements[i].selected !== selected){
          return {symbol: this.Elements[i].symbol}
        }
      })
    });
    console.log(formValue);

    this.as.addProcess(formValue);

  }

}
