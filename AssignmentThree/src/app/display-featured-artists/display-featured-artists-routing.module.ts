import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayFeaturedArtistsPage } from './display-featured-artists.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayFeaturedArtistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayFeaturedArtistsPageRoutingModule {}
