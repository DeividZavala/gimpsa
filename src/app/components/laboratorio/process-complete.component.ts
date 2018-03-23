import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'process-complete',
  template: `
  
    <div class="uk-flex uk-flex-between">
      <h1>Completar Analisis</h1>

      <div>
        <a routerLink="/certificate" class="uk-button uk-button-primary">Imprimir Certificado</a>
      </div>
    </div>
    
    <div uk-grid>
      
      <div>
        <process-form [process]="process" [id]="id"></process-form>
      </div>
      
    </div>
  
  `
})
export class ProcessCompleteComponent implements OnInit{

  process: any;
  id: number;

  constructor(
    private as: AppService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){

    this.route.params.subscribe(params=>{
      this.id = +params['id']
    });
    this.getDetail(this.id);
  }

  getDetail(id: number){
    this.process = this.as.getDetail(id);
  }

}
