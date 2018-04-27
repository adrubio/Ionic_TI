import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsAtletaPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-atleta',
  templateUrl: 'tabs-atleta.html'
})
export class TabsAtletaPage {

  perfilAtletaRoot = 'PerfilAtletaPage'
  estadisticasAtletaRoot = 'EstadisticasAtletaPage'
  competenciasAtletaRoot = 'CompetenciasAtletaPage'
  


  constructor(public navCtrl: NavController) {}

}
