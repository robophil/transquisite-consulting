import { Component } from '@angular/core';
import { Input } from '@angular/core';

/**
 * Generated class for the SliderComponent component.
 * 
 * to easily show our slider with image and small header or title
 * 
 * not used again
 * @deprecated since no need for title again
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderComponent {
  @Input() src: string;
  @Input() title: string;


  constructor() {
  }

}
