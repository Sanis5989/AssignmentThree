import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateArtistsPage } from './update-artists.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateArtistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateArtistsPageRoutingModule {}
