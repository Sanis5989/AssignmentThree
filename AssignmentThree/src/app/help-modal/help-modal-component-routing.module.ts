import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpModalComponentPage } from './help-modal-component.page';

const routes: Routes = [
  {
    path: '',
    component: HelpModalComponentPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpModalPageRoutingModule {}
