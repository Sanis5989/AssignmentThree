import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Artist } from 'src/Artist';

@Component({
  selector: 'help-modal-component',
  templateUrl: './help-modal-component.page.html',
  styleUrls: ['./help-modal-component.page.scss'],
})
export class HelpModalComponentPage implements OnInit {
  @Input()
  artist!: Artist;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
