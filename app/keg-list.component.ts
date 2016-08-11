import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template:`
  <keg-display *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)" [class.selected]="currentKeg === slectedKeg" [keg]="currentKeg"></keg-display>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  <edit-keg-deails *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-deails>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg([name, brand]: string[], [price, alcohol]: number[]): void {
    this.kegList.push(
      new Keg(name, brand, price, alcohol, this.kegList.length)
    );
  }
}