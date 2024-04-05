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
        import('../display-asrtists/display-asrtists.module').then((m) => m.DisplayAsrtistsPageModule),
      },

      {
        path: 'display-featured-artists',
        loadChildren: () =>
        import('../display-featured-artists/display-featured-artists.module').then((m)=> m.DisplayFeaturedArtistsPageModule)
      },

      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
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
        loadChildren: () => import('../update-artists/update-artists.module').then((m)=> m.UpdateArtistsPageModule)
      },
      {
        path: 'delete-artists',
        loadChildren: () => import('../delete-artists/delete-artists.module').then((m)=> m.DeleteArtistsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
