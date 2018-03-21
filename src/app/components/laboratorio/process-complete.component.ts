import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'process-complete',
  template: `
  
    <h1>Completar Analisis</h1>
    
    <div uk-grid>
      <div>
        <process-form [process]="process"></process-form>
      </div>
      <div></div>
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
