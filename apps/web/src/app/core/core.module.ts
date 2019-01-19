import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LocalStorageModule } from 'angular-2-local-storage';

import { environment } from '@environments';
import { RootComponent } from './containers/root/root.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardBackdropImageComponent } from './components/card-backdrop-image/card-backdrop-image.component';
import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';
import { CardPosterImageComponent } from './components/card-poster-image/card-poster-image.component';
import { CardCastComponent } from './components/card-cast/card-cast.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchComponent } from './components/search/search.component';
import { SearchModule } from '@platform/core/state/search/search.module';
import { FavoriteMediaComponent } from './components/favorite-media/favorite-media.component';
import { FavoritesModule } from './../favorites/favorites.module';
import { FavoritesService } from './../core/services';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        CarouselModule.forRoot(),
        SearchModule,
        LocalStorageModule.withConfig({
            prefix: environment.dbName,
            storageType: 'localStorage'
        }),
        FavoritesModule
    ],
    declarations: [
        RootComponent,
        NotFoundPageComponent,
        HeaderComponent,
        FooterComponent,
        CarouselComponent,
        CardBackdropImageComponent,
        LoadingAnimationComponent,
        CardPosterImageComponent,
        CardCastComponent,
        FiltersComponent,
        SearchComponent,
        FavoriteMediaComponent
    ],
    exports: [
        RootComponent,
        NotFoundPageComponent,
        ReactiveFormsModule,
        CarouselComponent,
        CardBackdropImageComponent,
        LoadingAnimationComponent,
        CardPosterImageComponent,
        CardCastComponent,
        FiltersComponent,
        SearchComponent,
        FavoriteMediaComponent
    ],
    providers: [
        FavoritesService
    ]
})
export class CoreModule { }
