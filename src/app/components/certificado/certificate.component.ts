import {AfterViewInit, Component, ElementRef, LOCALE_ID, OnInit, ViewChild} from "@angular/core";

@Component({
  selector: 'certificate-component',
  styleUrls: ['certificate.component.scss'],
  providers:[{ provide: LOCALE_ID, useValue: "es" }],
  template: `
    
    <button class="uk-button uk-button-primary noprint" (click)="printCertificate()">Imprimir</button>
    
    <div #certificate class="certificate uk-margin-medium-top">
      
      <div class="uk-flex uk-flex-around">
        <div class="">
          <img src="img/logo.png" alt="">
        </div>
        <div class="uk-text-center">
          <h4 class="uk-margin-remove" >SOLUCIONES ECOLOGICAS EN METALES SA DE CV</h4>
          <h6 class="uk-margin-small-top" >ANALISIS DE LABORATORIO</h6>
        </div>
        <div class="uk-text-center">
          <h6>Folio</h6>
          <p>P 11093</p>
        </div>
      </div>
      
      <div class="uk-margin-medium-top">
        <div class="uk-child-width-1-2" uk-grid>
          <div>
            <ul class="uk-list uk-list-divider">
              
              <li class="">
                <span class="uk-text-bold uk-display-inline-block">Fecha:</span>
                <span class="uk-display-inline-block uk-float-right"> {{ Date | date: 'MMMM d y, h:mm:ss a' }} </span>
              </li>
              
              <li class="">
                <span class="uk-text-bold uk-display-inline-block">Material:</span>
                <span class="uk-display-inline-block uk-float-right uk-text-uppercase"> Granalla AG P/Nitrato de Maquila </span>
              </li>
              
              <li class="">
                <span class="uk-text-bold uk-display-inline-block">Presentación:</span>
                <span class="uk-display-inline-block uk-float-right"> Solido </span>
              </li>
              
              <li class="">
                <span class="uk-text-bold uk-display-inline-block">Elementos a analizar:</span>
                <span class="uk-display-inline-block uk-float-right"> Ag </span>
              </li>
              
              <li class="">
                <span class="uk-text-bold uk-display-inline-block">Metodo utilizado:</span>
                <span class="uk-display-inline-block uk-float-right"> PP-03 </span>
              </li>
              
            </ul>
          </div>
          <div>
            <ul class="uk-list uk-list-divider">
              
              <li class="">
                <span class="uk-text-bold uk-display-inline-block">Lote:</span>
                <span class="uk-display-inline-block uk-float-right"> 8209 </span>
              </li>

              <li class="">
                <span class="uk-text-bold uk-display-inline-block">Peso Neto:</span>
                <span class="uk-display-inline-block uk-float-right"> 3.9996 Kg </span>
              </li>

              <li class="">
                <span class="uk-text-bold uk-display-inline-block">Peso muestra:</span>
                <span class="uk-display-inline-block uk-float-right"> 1.040 g </span>
              </li>

              <li class="">
                <span class="uk-text-bold uk-display-inline-block">Peso muestra cliente:</span>
                <span class="uk-display-inline-block uk-float-right"> 0 g </span>
              </li>
              
              <li class="">
                <span class="uk-text-bold uk-display-inline-block">Peso terceria:</span>
                <span class="uk-display-inline-block uk-float-right"> 0 g </span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      
      <section class="uk-section-small">
        <table class="uk-table uk-table-divider">
          <thead>
          <tr>
            <th>Peso Muestra</th>
            <th>Peso Final</th>
            <th>Ley</th>
            <th>Promedio</th>
            <th>Ley a reportar</th>
            <th>Kilataje</th>
            <th>Incertidumbre</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>0.5018</td>
            <td>0.5018</td>
            <td>1000</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>0.5021</td>
            <td>0.5021</td>
            <td>1000</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          
          </tbody>
        </table>
      </section>
      
      <div class="uk-margin-medium-top uk-float-left uk-width-1-3 uk-text-center">
        <p class="uk-margin-remove">David Zavala</p>
        <div class="line"></div>
        <p class="uk-text-uppercase uk-margin-remove">Elaborado por</p>
        <p class="uk-margin-remove">Analista</p>
      </div>
      
    </div>
    
  `
})
export class CertificateComponent implements OnInit, AfterViewInit{

  Date: number = Date.now();

  @ViewChild('certificate') certificate: ElementRef;

  ngOnInit(){

  }

  printCertificate(){
    /*const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write(this.certificate.nativeElement.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();*/
    window.print();
  }

  ngAfterViewInit(){

  }

}
