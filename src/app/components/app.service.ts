import {Injectable} from "@angular/core";


@Injectable()
export class AppService{


  Procesos: any[] = [
    {
      id: 1,
      muestra: 234,
      material: "Oro",
      area: "Laboratorio",
      type: "Analisis"
    }
  ];

  getProcesses(){
    return this.Procesos;
  }

  addProcess(process: any){
    this.Procesos.push(process)
  }

}
