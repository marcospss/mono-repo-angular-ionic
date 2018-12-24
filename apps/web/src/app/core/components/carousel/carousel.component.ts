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
