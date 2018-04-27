import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilEntrenadorPage } from './perfil-entrenador';

@NgModule({
  declarations: [
    PerfilEntrenadorPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilEntrenadorPage),
  ],
})
export class PerfilEntrenadorPageModule {}
