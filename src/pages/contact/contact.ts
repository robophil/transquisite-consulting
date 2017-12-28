import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _statusBar: StatusBar) {
    this._statusBar.backgroundColorByHexString('#75194A');
  }

  ionViewDidLoad() { 
  }

  ionViewWillLeave() {
    this._statusBar.styleDefault();
  }


}
