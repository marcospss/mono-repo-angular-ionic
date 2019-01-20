import { Component, Input } from '@angular/core';

import { Media } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';

@Component({
  selector: 'mps-card-poster-image',
  template: `
    <mps-favorite-media [item]="item"></mps-favorite-media>
    <figure>
        <a [routerLink]="['/details', item.id]">
            <img [src]="utilsProvider.posterImage(item.poster_path)" alt="{{ utilsProvider.title(item) }}">
        </a>
    </figure>
    <div class="overview">
        <h3><a [routerLink]="['/details', mediaType, item.id]">{{ utilsProvider.title(item) | slice:0:20 }}</a></h3>
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
        .overview h3::after, .overview p::after {
            content: "...";
        }
        mps-favorite-media > button {
            color: #000;
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
