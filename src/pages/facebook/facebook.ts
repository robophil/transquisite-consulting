import { Component, ApplicationRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Network } from '@ionic-native/network';

declare var window:any;
/**
 * Generated class for the FacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html',
})
export class FacebookPage {
  showFeeds: boolean = true;
  onDevice: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _ref: ApplicationRef, private _network: Network, private _platform: Platform) {
    this.onDevice = this._platform.is('cordova');
  }

  ionViewDidLoad() {

    if (this.onDevice) {
      // just incase there's network before listening for change in connection
      if (this._network.type != 'none') {
        this.showFeeds = true;
        this.loadMap();
      } else {
        this.showFeeds = false;
      }

      this._network.onConnect().subscribe(() => {
        this.showFeeds = true;
        this.loadMap();
        this._ref.tick();//update ui view
      });

      this._network.onDisconnect().subscribe(() => {
        this.showFeeds = false;
        this._ref.tick();//update ui view
      });
    } else {
      // for browser testing 
      if (navigator.onLine) {
        this.showFeeds = true;
        this.loadMap();
      } else {
        this.showFeeds = false;
      }
    }

  }


  /**
   * set up our map for us here
   */
  private loadMap(): void {

    // check if the map script has been loaded or not
    if (typeof window.FB == "undefined") {
      let script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=357546818042542';
 
      document.body.appendChild(script);
    } 

  }

}
