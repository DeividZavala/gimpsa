import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {AppService} from "../app.service";

interface Element {
  [key: string]: any
}

@Component({
  selector: 'process-form',
  template: `

    <form class="uk-form-stacked" [formGroup]="form">
      <div class="uk-child-width-1-2 uk-grid-small" uk-grid>

        <div class="">
          <label class="uk-form-label" for="process-lot">Lote</label>
          <div class="uk-form-controls">
            <select class="uk-select" id="process-lot" formControlName="lote" (change)="getLot($event.target.value)">
              <option value="" selected>Seleccionar lote</option>
              <option *ngFor="let lot of Batches" [value]="lot.id" >{{lot.id}}</option>
            </select>
          </div>
        </div>

        <div class="">
          <label class="uk-form-label" for="process-weight">Peso Muestra (Inicial)</label>
          <div class="uk-form-controls">
            <input class="uk-input" id="process-weight" type="number" min="0" step="" placeholder="Peso muestra" formControlName="initial_weigth">
          </div>
        </div>

        <div class="" *ngIf="process">
          <label class="uk-form-label" for="process-weight-final">Peso Muestra (Final)</label>
          <div class="uk-form-controls">
            <input class="uk-input" id="process-weight-final" type="number" min="0" step="" placeholder="Peso Muestra final" formControlName="final_weigth" (keyup)="getLay($event.target.value)">
          </div>
        </div>

        <div class="" *ngIf="process">
          <label class="uk-form-label" for="process-lay">Ley</label>
          <div class="uk-form-controls">
            <input class="uk-input" id="process-lay" type="number" min="0" step="" placeholder="Ley" formControlName="law">
          </div>
        </div>


        <div class="">
          <label class="uk-form-label" for="process-material">Material</label>
          <div class="uk-form-controls">
            <select class="uk-select" id="process-material" formControlName="material" >
              <option value="" selected>Seleccionar Material</option>
              <option *ngFor="let material of Materials" [value]="material.name" >{{material.name}}</option>
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
              <option *ngFor="let p of Processes" [value]="p" >{{p}}</option>
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
        (click)="onEdit(form.value)"
        *ngIf="process">
        Editar proceso
      </button>

      <button
        class="uk-button btn-succes uk-button-default uk-margin-small uk-float-right"
        type="button"
        (click)="onAdded(form.value)"
        *ngIf="!process">
        Crear Proceso
      </button>

    </form>
  
  `
})
export class ProcessFormComponent implements OnInit{

  @Output()
  processCreated = new EventEmitter<any>();

  @Input()
  process?: any;

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
    if(this.process) {
      this.form.patchValue(this.process);
      this.onAreaChange(this.process.area);
    }
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
    area: null,
    process: null,
    elements: this.buildElements(),
    id: null,
    final_weigth: null,
    law: null
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

  getLay(){
    let law = (this.form.value.final_weigth / this.form.value.initial_weigth) * 1000;
    this.form.patchValue({law});
  }

  getSelectedElements(array: any){

    let ele;

    let elements = array.map((selected: boolean, i: number)=>{
      return {
        symbol: this.Elements[i].symbol,
        selected
      }
    });
    ele = elements.filter((element: any) => element.selected === true);

    return ele;

  }

  onAdded(form: any){


    const formValue = Object.assign({}, form, {
      elements: this.getSelectedElements(form.elements)
    });

    this.as.addActions({user: "David", "type": "creo", target:this.form.value.lote, target_type:"Proceso"});

    this.as.addProcess(formValue);

    this.processCreated.emit();

    this.form.reset({
      lote: null,
      initial_weigth: null,
      material: null,
      area: null,
      process: null,
      elements: this.buildElements(),
      id: null,
      final_weigth: null,
      law: null
    })

  }

}
