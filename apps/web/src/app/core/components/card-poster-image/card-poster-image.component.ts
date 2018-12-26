import { Component, Input } from '@angular/core';

import { Media } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';

@Component({
  selector: 'mps-card-poster-image',
  template: `
    <figure>
        <a [routerLink]="['/details', item.id]">
            <img [src]="utilsProvider.posterImage(item.poster_path)" alt="{{ utilsProvider.title(item) }}">
        </a>
    </figure>
    <div class="overview">
        <h3><a [routerLink]="['/details', mediaType, item.id]">{{ utilsProvider.title(item) }}</a></h3>
        <p><a [routerLink]="['/details', mediaType, item.id]">{{ item.overview | slice:0:140 }}</a></p>
    </div>
    `,
    styles: [
        `
        figure {
            float: left;
            margin-right: 10px;
            display: block;
        }
        .overview {
            color: #777;
        }
        .overview a {
            color: #777;
        }
        .overview p {
            overflow: hidden;
        }
        .overview p::after {
            content: "...";
        }
        `
    ]
})
export class CardPosterImageComponent {
    @Input() item: Media[];
    @Input() mediaType: string;

    constructor(
        public utilsProvider: UtilsProvider
    ) { }

}
