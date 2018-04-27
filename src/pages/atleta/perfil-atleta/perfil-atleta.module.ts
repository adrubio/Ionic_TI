import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilAtletaPage } from './perfil-atleta';

@NgModule({
  declarations: [
    PerfilAtletaPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilAtletaPage),
  ],
})
export class PerfilAtletaPageModule {}
