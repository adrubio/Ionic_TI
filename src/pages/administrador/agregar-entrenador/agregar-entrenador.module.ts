import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarEntrenadorPage } from './agregar-entrenador';

@NgModule({
  declarations: [
    AgregarEntrenadorPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarEntrenadorPage),
  ],
})
export class AgregarEntrenadorPageModule {}
