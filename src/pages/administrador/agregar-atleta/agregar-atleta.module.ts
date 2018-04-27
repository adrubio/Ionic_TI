import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarAtletaPage } from './agregar-atleta';

@NgModule({
  declarations: [
    AgregarAtletaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarAtletaPage),
  ],
})
export class AgregarAtletaPageModule {}
