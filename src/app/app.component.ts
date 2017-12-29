import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { FacebookPage } from '../pages/facebook/facebook';
import { UtilProvider } from '../providers/util';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  aboutUs: any = HomePage;
  contact: any = ContactPage;
  facebook: any = FacebookPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _utilService: UtilProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#75194A');
      statusBar.styleLightContent();
      splashScreen.hide();
    });
  }

  jobSearch() {
    this._utilService.openInAppBrowser('http://www.transquisiteconsulting.com/job-search');
  }

  register() {
    this._utilService.openInAppBrowser('http://www.transquisiteconsulting.com/user/registration');
  }

}

