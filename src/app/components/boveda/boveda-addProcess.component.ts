import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {AppService} from "../app.service";
import * as UIkit from 'uikit';

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
        
        <process-form (processCreated)="onCreated()"></process-form>

      </div>
    </div>
  
  
  `
})
export class BovedaAddProcessComponent{

  onCreated(){
    UIkit.modal('#add-process').hide();
  }

}
