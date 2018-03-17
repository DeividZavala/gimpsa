import {Component} from "@angular/core";

@Component({
  selector: 'boveda-addOrder',
  styleUrls: ['boveda-addOrder.component.scss'],
  template: `

    
    <button class="uk-button uk-button-default uk-margin-small-right btn-succes" type="button" uk-toggle="target: #add-order">Agregar</button>

    <!-- This is the modal with the default close button -->
    <div id="add-order" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-width-1-2">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">Alta Ingreso</h2>
        <form >
          
          <form class="uk-form-stacked">
            <div class="uk-child-width-1-2 uk-grid-small" uk-grid>
              
              <div class="">
              <label class="uk-form-label" for="entry-lote">Lote</label>
              <div class="uk-form-controls">
                <input class="uk-input" id="entry-lote" type="number" placeholder="Número de lote">
              </div>
            </div>

              <div class="">
                <label class="uk-form-label" for="entry-price">Precio de entrada</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="entry-price" type="number" min="0" step="" placeholder="Precio de entrada">
                </div>
              </div>

              <div class="">
                <label class="uk-form-label" for="entry-price">Cantidad</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="entry-price" type="number" placeholder="Cantidad en gramos">
                </div>
              </div>

              <div class="">
                <label class="uk-form-label" for="entry-date">Fecha de ingreso</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="entry-date" type="date">
                </div>
              </div>

              <div class="">
                <label class="uk-form-label" for="form-stacked-select">Cliente</label>
                <div class="uk-form-controls">
                  <select class="uk-select" id="form-stacked-select">
                    <option value="" selected>Cliente</option>
                    <option value="">Juan Lopez</option>
                    <option value="">Ramon Castillo</option>
                  </select>
                </div>
              </div>

              <div class="">
                <label class="uk-form-label" for="form-stacked-select">Material</label>
                <div class="uk-form-controls">
                  <select class="uk-select" id="form-stacked-select">
                    <option value="" selected>Material</option>
                    <option>Oro</option>
                    <option>Plata</option>
                  </select>
                </div>
              </div>

              <div class="">
                <label class="uk-form-label" for="form-stacked-select">Servicio</label>
                <div class="uk-form-controls">
                  <select class="uk-select" id="form-stacked-select">
                    <option value="" selected>Servicio</option>
                    <option>Afinación</option>
                    <option>Fundición</option>
                  </select>
                </div>
              </div>

              <div class="">
                <label class="uk-form-label" for="entry-presentation">Presentación</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="entry-presentation" type="text">
                </div>
              </div>

              <div class="uk-width-1-1">
                <label class="uk-form-label" for="entry-presentation">Descripción</label>
                <div class="uk-form-controls">
                  <textarea class="uk-textarea" rows="5" placeholder=""></textarea>
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
