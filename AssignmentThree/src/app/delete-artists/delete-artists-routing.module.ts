import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteArtistsPage } from './delete-artists.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteArtistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteArtistsPageRoutingModule {}
