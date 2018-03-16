import {Component} from "@angular/core";

@Component({
  selector: 'boveda-addOrder',
  styleUrls: ['boveda-addOrder.component.scss'],
  template: `

    
    <button class="uk-button uk-button-default uk-margin-small-right btn-succes" type="button" uk-toggle="target: #add-order">Agregar</button>

    <!-- This is the modal with the default close button -->
    <div id="add-order" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">Alta Ingreso</h2>
        <form >
          
          <form class="uk-form-stacked">
            <div class="" uk-grid>
              
              <div class="">
              <label class="uk-form-label" for="alta-lote">Lote</label>
              <div class="uk-form-controls">
                <input class="uk-input" id="alta-lote" type="number" placeholder="Número de lote">
              </div>
            </div>

              <div class="">
                <label class="uk-form-label" for="form-stacked-text">Precio de entrada</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="form-stacked-text" type="number" placeholder="Precio de entrada">
                </div>
              </div>

              <div class="">
                <label class="uk-form-label" for="form-stacked-text">Text</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="form-stacked-text" type="text" placeholder="Some text...">
                </div>
              </div>
              
            </div>
          </form>
        </form>
        
      </div>
    </div>
  
  `
})
export class BovedaAddOrderComponent{}
