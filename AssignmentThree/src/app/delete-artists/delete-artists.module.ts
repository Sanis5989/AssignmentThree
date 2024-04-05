import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteArtistsPageRoutingModule } from './delete-artists-routing.module';

import { DeleteArtistsPage } from './delete-artists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteArtistsPageRoutingModule
  ],
  declarations: [DeleteArtistsPage]
})
export class DeleteArtistsPageModule {}
