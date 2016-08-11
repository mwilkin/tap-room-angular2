import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSumbitNewKeg'],
  template: `
    <div class="container">
      <h3>Create New Keg: </h3>
      <input placeholder="Name" #newName>
      <input placeholder="Band" #newBrand>
      <input placeholder="Price" #newPrice>
      <input placeholder="Alcohol Content" #newAlcohol>

      <button class="btn-primary" (click)="addKeg(newName, newBrand, newPrice, newAlcohol)">Add</button>
    </div>
  `
})
  export class NewKegComponent {
    public onSubmitNewKeg: EventEmitter<String[]>;
    constructor(){
      this.onSubmitNewKeg = new EventEmitter();
    }
    addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcohol: HTMLInputElement){
    this.onSubmitNewKeg.emit([userName.value, userBrand.value, userPrice.value, userAlcohol.value]);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcohol.value = "";
  }
}
