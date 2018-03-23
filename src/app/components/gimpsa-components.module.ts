import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common'

// components
import {LaboratorioComponent} from "./laboratorio/laboratorio.component";
import {BovedaComponent} from "./boveda/boveda.component";
import { RouterModule, Routes } from "@angular/router";
import {BovedaAddOrderComponent} from "./boveda/boveda-addOrder.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppService} from "./app.service";
import {BovedaAddProcessComponent} from "./boveda/boveda-addProcess.component";
import {ProcessFormComponent} from "./boveda/process-form.component";
import {ProcessCompleteComponent} from "./laboratorio/process-complete.component";
import {CertificateComponent} from "./certificado/certificate.component";

const Routes: Routes = [
  {
    path: "certificate",
    component: CertificateComponent
  },
  {
    path: 'areas',
    children: [
      {
        path: 'boveda',
        component: BovedaComponent
      },
      {
        path: 'lab',
        children:[
          {
            path: '',
            component: LaboratorioComponent,
          },
          {
            path:':id',
            component: ProcessCompleteComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    ProcessCompleteComponent,
    LaboratorioComponent,
    BovedaComponent,
    BovedaAddOrderComponent,
    BovedaAddProcessComponent,
    ProcessFormComponent,
    CertificateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routes)
  ],
  providers: [
    AppService
  ],
  exports: []
})
export class GimpsaComponentsModule{}
