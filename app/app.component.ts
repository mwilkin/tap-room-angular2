import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Knobby Tire Tap Room</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Knobby Tire IPA", "Knobby Tire Brewing", 6, 8, 0),
      new Keg("Dirty Chain Pale Ale", "Knobby Tire Brewing", 5, 7, 1),
      new Keg("Saddle Sour", "Knobby Tire Brewing", 6, 5, 2),
      new Keg("Dropper Stout", "Knobby Tire Brewing", 5, 5, 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
