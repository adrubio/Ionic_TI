import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsAtletaPageModule} from '../pages/atleta/tabs-atleta/tabs-atleta.module';
import {TabsEntrenadorPageModule} from '../pages/entrenador/tabs-entrenador/tabs-entrenador.module';
import {TabsAdministradorPageModule} from '../pages/administrador/tabs-administrador/tabs-administrador.module';
import {AgregarEntrenadorPageModule} from '../pages/administrador/agregar-entrenador/agregar-entrenador.module';
import {AgregarAtletaPageModule} from '../pages/administrador/agregar-atleta/agregar-atleta.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: "top"}),
    TabsAtletaPageModule,
    TabsEntrenadorPageModule,
    TabsAdministradorPageModule,
    AgregarEntrenadorPageModule,
    AgregarAtletaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
