import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common'

// components
import {LaboratorioComponent} from "./laboratorio/laboratorio.component";
import {BovedaComponent} from "./boveda/boveda.component";
import { RouterModule, Routes } from "@angular/router";
import {BovedaAddOrderComponent} from "./boveda/boveda-addOrder.component";
import {ReactiveFormsModule} from "@angular/forms";

const Routes: Routes = [
  {
    path: 'areas',
    children: [
      {path: 'boveda', component: BovedaComponent},
      {path: 'lab', component: LaboratorioComponent}
    ]
  }
];

@NgModule({
  declarations: [
    LaboratorioComponent,
    BovedaComponent,
    BovedaAddOrderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routes)
  ],
  exports: []
})
export class GimpsaComponentsModule{}
