import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetenciasAtletaPage } from './competencias-atleta';

@NgModule({
  declarations: [
    CompetenciasAtletaPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetenciasAtletaPage),
  ],
})
export class CompetenciasAtletaPageModule {}
