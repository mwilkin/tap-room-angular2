import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="container">
    <h4>Edit Keg Name: </h4>
    <input [(ngModel)]="keg.name" class="input-lg"/>
    <h4>Edit Keg Brand: </h4>
    <input [(ngModel)]="keg.brand" class="input-lg"/>
    <h4>Edit Keg Price: </h4>
    <input [(ngModel)]="keg.price" class="input-lg"/>
    <h4>Edit Keg Alcohol: </h4>
    <input [(ngModel)]="keg.alcohol" class="input-lg"/>
    <button class="btn-primary"(click)="addKeg(newName, newBrand, newPrice, newAlcohol)">Update</button>
  </div>


  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
