import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {AgregarEntrenadorPage} from '../agregar-entrenador/agregar-entrenador'

/**
 * Generated class for the EntrenadoresAdministradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrenadores-administrador',
  templateUrl: 'entrenadores-administrador.html',
})
export class EntrenadoresAdministradorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalControl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrenadoresAdministradorPage');
  }
  
  // agregarEntrenador():void{    
  //   this.navCtrl.push(AgregarEntrenadorPage);     
  // }
  //Con modal
  agregarEntrenador(){
  let modal = this.modalControl.create(AgregarEntrenadorPage);
  modal.present();
  }
}
