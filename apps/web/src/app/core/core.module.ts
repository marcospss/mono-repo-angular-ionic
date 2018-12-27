import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';

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

@NgModule({
    imports: [CommonModule, RouterModule, CarouselModule.forRoot()],
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
        FiltersComponent
    ],
    exports: [
        RootComponent,
        NotFoundPageComponent,
        CarouselComponent,
        CardBackdropImageComponent,
        LoadingAnimationComponent,
        CardPosterImageComponent,
        CardCastComponent,
        FiltersComponent
    ]
})
export class CoreModule { }
