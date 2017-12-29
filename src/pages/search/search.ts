import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtilProvider } from '../../providers/util';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _utilService: UtilProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  /**
   * instead of opening the actual tab open it in a browser and block the page from rendering
   * :wink:
   */
  ionViewCanEnter(): boolean {
    this._utilService.openInAppBrowser('http://www.transquisiteconsulting.com/job-search');
    return false;
  }

}
