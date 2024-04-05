import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayAsrtistsPageRoutingModule } from './display-asrtists-routing.module';

import { DisplayAsrtistsPage } from './display-asrtists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayAsrtistsPageRoutingModule
  ],
  declarations: [DisplayAsrtistsPage]
})
export class DisplayAsrtistsPageModule {}
