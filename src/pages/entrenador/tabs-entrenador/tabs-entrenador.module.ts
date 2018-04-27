import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsEntrenadorPage } from './tabs-entrenador';

@NgModule({
  declarations: [
    TabsEntrenadorPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsEntrenadorPage),
  ]
})
export class TabsEntrenadorPageModule {}
