import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { Network } from '@ionic-native/network';
import { FacebookPage } from '../pages/facebook/facebook'; 
import { UtilProvider } from '../providers/util';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    FacebookPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    FacebookPage
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    Network,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilProvider
  ]
})
export class AppModule {}
