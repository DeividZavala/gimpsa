import {Component} from "@angular/core";

@Component({
  selector: 'lab-component',
  styleUrls: ['laboratorio.component.scss'],
  template: `
  
    <h2>Laboratorio</h2>

    <section class="uk-section uk-section-xsmall">
      <h3 class="uk-card-title uk-margin-remove-top">Procesos pendientes</h3>
      <div class="uk-child-width-1-3 uk-grid-small uk-grid-match" uk-grid>

        <div>
          <div class="uk-card uk-card-default uk-animation-scale-up">

            <div class="uk-card-header uk-padding-small">
              <div class="uk-card-badge uk-label">Analisis</div>
              <div class="uk-grid-small uk-flex-middle uk-width-3-4" uk-grid>
                <div>
                  <h3 class="uk-margin-remove-bottom">Granalla Ag P/Nitrato Maquila</h3>
                  <p class="uk-text-meta uk-margin-remove-top">Material</p>
                </div>
                
              </div>
            </div>
            
            <div class="uk-card-body uk-padding-small">
              <div class="uk-grid-small uk-child-width-1-2" uk-grid>
                
                <div>
                  <h4 class="uk-margin-remove-bottom">0.234 g</h4>
                  <p class="uk-text-meta uk-margin-remove-top">Peso Muestra</p>
                </div>
                
                <div>
                  <h4 class="uk-margin-remove-bottom">Sólido</h4>
                  <p class="uk-text-meta uk-margin-remove-top">Presentación</p>
                </div>

                <div>
                  <h4 class=" uk-margin-remove-bottom">0021</h4>
                  <p class="uk-text-meta uk-margin-remove-top">Lote</p>
                </div>

                <div>
                  <h4 class=" uk-margin-remove-bottom">3 KG</h4>
                  <p class="uk-text-meta uk-margin-remove-top">Peso Neto</p>
                </div>
                
                <div class="uk-width-1-1">
                  <h6>Elementos a analizar</h6>
                  <span class="label">Ag</span>
                  <span class="label">Au</span>
                  <span class="label">Pt</span>
                </div>
                
              </div>
            </div>
            <div class="uk-card-footer uk-flex uk-flex-between uk-flex-middle uk-padding-small">
              <a href="#" class="uk-button uk-button-text">Completar</a>
              <a href="" class="uk-button uk-button-default uk-margin-small-right btn-succes">Finalizar</a>
            </div>
            
          </div>
        </div>

      </div>
    </section>
    
  `
})
export class LaboratorioComponent{

}
