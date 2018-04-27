import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsAdministradorPage } from './tabs-administrador';

@NgModule({
  declarations: [
    TabsAdministradorPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsAdministradorPage),
  ]
})
export class TabsAdministradorPageModule {}
