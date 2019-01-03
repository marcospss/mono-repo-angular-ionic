import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';


const routes: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'details',
        loadChildren: './details/details.module#DetailsModule'
    },
    {
        path: 'discover',
        loadChildren: './discover/discover.module#DiscoverModule'
    },
    {
        path: 'movies',
        loadChildren: './discover/discover.module#DiscoverModule'
    },
    {
        path: 'search',
        loadChildren: './search/search.module#SearchModule'
    },
    {
        path: 'favorites',
        loadChildren: './favorites/favorites.module#FavoritesModule'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
