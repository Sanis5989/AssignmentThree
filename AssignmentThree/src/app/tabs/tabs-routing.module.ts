import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },

      {
        path: 'display-artists',
        loadChildren: () =>
          import('../display-asrtists/display-asrtists.module').then(
            (m) => m.DisplayAsrtistsPageModule
          ),
      },

      {
        path: 'search',
        loadChildren: () =>
          import('../search/search.module').then((m) => m.SearchPageModule),
      },

      {
        path: 'display-featured-artists',
        loadChildren: () =>
          import(
            '../display-featured-artists/display-featured-artists.module'
          ).then((m) => m.DisplayFeaturedArtistsPageModule),
      },

      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },

      {
        path: 'add-artist',
        loadChildren: () =>
          import('../add-artist/add-artist.module').then(
            (m) => m.AddArtistPageModule
          ),
      },
      {
        path: 'update-artists',
        loadChildren: () =>
          import('../update-artists/update-artists.module').then(
            (m) => m.UpdateArtistsPageModule
          ),
      },
     
      {
        path: '**',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
