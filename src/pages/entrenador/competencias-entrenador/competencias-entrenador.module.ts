import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetenciasEntrenadorPage } from './competencias-entrenador';

@NgModule({
  declarations: [
    CompetenciasEntrenadorPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetenciasEntrenadorPage),
  ],
})
export class CompetenciasEntrenadorPageModule {}
