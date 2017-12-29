import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {

  constructor(private _iab: InAppBrowser) {
    console.log('Hello UtilProvider Provider');
  }

  /**
 * simply open in app browser to load up our webpage
 */
  openInAppBrowser(link: string) {
    let browser = this._iab.create(link, "_blank", "location=yes");
    // browser.on('loadstart').subscribe((event: InAppBrowserEvent) => {
    //   console.log("load start event", event);
    // });
    // browser.on('exit').subscribe((event: InAppBrowserEvent) => {
    //   console.log("browser closed", event);
    // });

    browser.show();
  }

}
