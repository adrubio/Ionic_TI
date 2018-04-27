import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtletasEntrenadorPage } from './atletas-entrenador';

@NgModule({
  declarations: [
    AtletasEntrenadorPage,
  ],
  imports: [
    IonicPageModule.forChild(AtletasEntrenadorPage),
  ],
})
export class AtletasEntrenadorPageModule {}
