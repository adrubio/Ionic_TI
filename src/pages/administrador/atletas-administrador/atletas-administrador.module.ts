import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtletasAdministradorPage } from './atletas-administrador';

@NgModule({
  declarations: [
    AtletasAdministradorPage,
  ],
  imports: [
    IonicPageModule.forChild(AtletasAdministradorPage),
  ],
})
export class AtletasAdministradorPageModule {}
