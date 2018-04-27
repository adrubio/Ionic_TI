import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {AgregarAtletaPage} from '../agregar-atleta/agregar-atleta';
/**
 * Generated class for the AtletasAdministradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atletas-administrador',
  templateUrl: 'atletas-administrador.html',
})
export class AtletasAdministradorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalControl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtletasAdministradorPage');
  }

  agregarAtleta(){
    let modal = this.modalControl.create(AgregarAtletaPage);
    modal.present();
    }

}
