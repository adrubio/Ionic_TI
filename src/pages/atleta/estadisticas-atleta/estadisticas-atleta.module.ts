import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstadisticasAtletaPage } from './estadisticas-atleta';

@NgModule({
  declarations: [
    EstadisticasAtletaPage,
  ],
  imports: [
    IonicPageModule.forChild(EstadisticasAtletaPage),
  ],
})
export class EstadisticasAtletaPageModule {}
