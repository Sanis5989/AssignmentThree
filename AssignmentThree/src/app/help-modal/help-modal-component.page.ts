import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HelpModalComponentPageModule } from './help-modal-component.module';


@Component({
  selector: 'help-modal-component',
  templateUrl: './help-modal-component.page.html',
  styleUrls: ['./help-modal-component.page.scss'],
})
export class HelpModalComponentPage {
 
  constructor(private modalCtrl: ModalController) {}


  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
