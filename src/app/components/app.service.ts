import {Injectable} from "@angular/core";
import {Lote} from "./boveda/entry.interface";
import {Observable} from "rxjs/Observable";
import { of } from 'rxjs/observable/of';



@Injectable()
export class AppService{


  Procesos = [
    {
      lote: 1,
      initial_weigth: 234,
      material: "Oro",
      area: "Laboratorio",
      process: "Copelacion",
      elements:[
        {symbol: "Ag", selected: true}
      ]
    }
  ];

  Lotes: Lote[] = [
    {
      id: 1,
      entry_price: 2349,
      material: "Oro",
      checkInDate: Date.now(),
      presentation: "Barra",
      quantity: 20,
      service: "Analisis",
      client: 1,
      description: "Barra Metalica de oro"
    },
    {
      id: 2,
      entry_price: 2349,
      material: "Plata",
      checkInDate: Date.now(),
      presentation: "Polvo",
      quantity: 30,
      service: "Fundición",
      client: 2,
      description: "Barra Metalica de oro"
    },
    {
      id: 3,
      entry_price: 23449,
      material: "Oro",
      checkInDate: Date.now(),
      presentation: "Granalla",
      quantity: 10,
      service: "Analisis",
      client: 1,
      description: "Granalla de plata"
    }
  ];

  Areas: any[] = [
    {
      name: "Laboratorio",
      id:1,
      processes: [
        "Copelacion"
      ]
    },
    {
      name: "Fundicion",
      id:2,
      processes: [
        "Fundicion"
      ]
    }
  ];

  materials = [
    {"name": "Oro", "id": 1},
    {"name": "Plata", "id": 2}
  ];

  actions = [
    {user:"Juan", type: "edito", target:"A123", target_type: "Analisis"},
    {user: "Maria", "type": "creo", target:"1", target_type:"Lote"}
  ];

  getActions():Observable<any>{
    return of(this.actions);
  }

  addActions(action: any){
    this.actions.push(action);
  }

  getProcesses():Observable<any>{
    return of(this.Procesos);
  }

  getDetail(id: number){
    return this.Procesos[id];
  }

  getAreas(){
    return this.Areas;
  }

  getMaterials(){
    return this.materials;
  }

  getBatches(){
    return this.Lotes;
  }

  addProcess(process: any){
    this.Procesos.push(process);
    console.log("Proceso agregado", process);
  }

  updateProcess(process: any ){

    if(process.id !== -1){
      this.Procesos[process.id] = process;
    }

  }

}
