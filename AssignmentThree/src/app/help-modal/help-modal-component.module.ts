import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HelpModalPageRoutingModule } from './help-modal-component-routing.module';
import { HelpModalComponentPage } from './help-modal-component.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HelpModalPageRoutingModule],
  declarations: [HelpModalComponentPage],
})
export class HelpModalComponentPageModule {}
