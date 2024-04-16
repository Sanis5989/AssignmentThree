import { Component } from '@angular/core';
import { HelpModalComponentPage } from '../help-modal/help-modal-component.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private modalCtrl:ModalController) {}


//create a help modal using modalcontroller and 
  async openHelp(){
    const modal = await this.modalCtrl.create({
      component: HelpModalComponentPage,
    })
    return await modal.present();
  }


}
