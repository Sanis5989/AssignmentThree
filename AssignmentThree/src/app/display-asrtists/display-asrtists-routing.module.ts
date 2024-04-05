import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayAsrtistsPage } from './display-asrtists.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayAsrtistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayAsrtistsPageRoutingModule {}
