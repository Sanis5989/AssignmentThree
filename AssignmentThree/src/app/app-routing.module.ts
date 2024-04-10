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
  {
    path: 'update-artists',
    loadChildren: () => import('./update-artists/update-artists.module').then( m => m.UpdateArtistsPageModule)
  },
  {
    path: 'delete-artists',
    loadChildren: () => import('./delete-artists/delete-artists.module').then( m => m.DeleteArtistsPageModule)
  },
  {
    path: 'artist-details-component',
    loadChildren: () => import('./artist-details-component/artist-details-component.module').then( m => m.ArtistDetailsComponentPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
