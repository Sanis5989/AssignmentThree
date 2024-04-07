import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateArtistsPageRoutingModule } from './update-artists-routing.module';

import { UpdateArtistsPage } from './update-artists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateArtistsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UpdateArtistsPage],
})
export class UpdateArtistsPageModule {}
