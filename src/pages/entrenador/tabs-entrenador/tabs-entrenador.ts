import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsEntrenadorPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-entrenador',
  templateUrl: 'tabs-entrenador.html'
})
export class TabsEntrenadorPage {

  perfilEntrenadorRoot = 'PerfilEntrenadorPage'
  competenciasEntrenadorRoot = 'CompetenciasEntrenadorPage'
  atletasEntrenadorRoot = 'AtletasEntrenadorPage'


  constructor(public navCtrl: NavController) {}

}
