import {Injectable} from "@angular/core";
import {Lote} from "./boveda/entry.interface";


@Injectable()
export class AppService{


  Procesos: any[] = [
    {
      lote: 1,
      initial_weigth: 234,
      material: "Oro",
      area: "Laboratorio",
      process: "Analisis",
      elements:[
        {symbol: "Ag"}
      ]
    }
  ];

  Lotes: Lote[]= [
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
        "Analisis"
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

  getProcesses(){
    return this.Procesos;
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
    this.Procesos.push(process)
  }

}
