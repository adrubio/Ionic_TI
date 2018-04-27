import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsAdministradorPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-administrador',
  templateUrl: 'tabs-administrador.html'
})
export class TabsAdministradorPage {

  atletasAdministradorRoot = 'AtletasAdministradorPage'
  entrenadoresAdministradorRoot = 'EntrenadoresAdministradorPage'
  competenciasAdminsitradorRoot = 'CompetenciasAdminsitradorPage'


  constructor(public navCtrl: NavController) {}

}
