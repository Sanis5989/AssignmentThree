import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },  {
    path: 'display-asrtists',
    loadChildren: () => import('./display-asrtists/display-asrtists.module').then( m => m.DisplayAsrtistsPageModule)
  },
  {
    path: 'display-featured-artists',
    loadChildren: () => import('./display-featured-artists/display-featured-artists.module').then( m => m.DisplayFeaturedArtistsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
