import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsEntrenadorPage} from '../entrenador/tabs-entrenador/tabs-entrenador';
import {TabsAtletaPage} from '../atleta/tabs-atleta/tabs-atleta';
import {TabsAdministradorPage} from '../administrador/tabs-administrador/tabs-administrador';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ir_tabs_Atleta():void{
    this.navCtrl.push(TabsAtletaPage); //Clase del componente Login    
  }

  ir_tabs_Entrenador():void{    
    this.navCtrl.push(TabsEntrenadorPage); //Clase del componente Login
  }

  ir_tabs_Admin():void{    
    this.navCtrl.push(TabsAdministradorPage); //Clase del componente Login
  }


}
