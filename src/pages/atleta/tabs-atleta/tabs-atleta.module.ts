import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsAtletaPage } from './tabs-atleta';

@NgModule({
  declarations: [
    TabsAtletaPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsAtletaPage),
  ]
})
export class TabsAtletaPageModule {}
