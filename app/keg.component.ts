import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <h3>{{ keg.name }}</h3>
    <h3>{{ keg.brand }}</h3>
    <h3>Price: \${{ keg.price }}</h3>
    <h3>Alcohol content: {{ keg.alcohol }} %</h3>
    <h3>Number of Pints remaining: {{ keg.pints }}</h3>
    <button (click)="subtractPint(keg)" class="btn btn-success"> minus </button>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
  subtractPint(subtractKeg: Keg): void {
    subtractKeg.pints = subtractKeg.pints - 1;
  }
}
