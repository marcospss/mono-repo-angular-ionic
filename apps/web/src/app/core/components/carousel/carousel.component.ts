import { Component, Input } from '@angular/core';

import { Media } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';

@Component({
  selector: 'mps-carousel',
  template: `
    <carousel>
        <slide *ngFor="let item of medias.results | slice: startIndex:endIndex">

            <a [routerLink]="['/details', mediaType, item.id]">
                <img [src]="utilsProvider.backdropImage(item.backdrop_path, 'w780')" alt="{{ item.title }}">
            </a>
            <div class="carousel-caption d-none d-md-block">
                <mps-favorite-media [item]="item"></mps-favorite-media>
                <h3>
                    <a [routerLink]="['/details', mediaType, item.id]">{{ ((item.title) ? item.title : item.name) }}</a>
                </h3>
                <p>
                    <a [routerLink]="['/details', mediaType, item.id]">{{ item.overview | slice:0:140 }}</a>
                </p>
            </div>
        </slide>
    </carousel>
  `,
  styles: [
    `.carousel-caption {
        border-radius: 10px;
        background: #ffffff5c;
        box-shadow: 0px 0px 6px 1px rgba(191,191,191,1);
    }
    .item.carousel-item a {
        color: #000
    }

    `,
  ]
})
export class CarouselComponent {
    @Input() medias: Media[];
    @Input() mediaType: string;
    @Input() startIndex: number;
    @Input() endIndex: number;

    constructor(
        public utilsProvider: UtilsProvider
    ) { }

}
