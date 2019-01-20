import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Media } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';

@Component({
  selector: 'mps-card-backdrop-image',
  template: `
  <div class="{{ className }}">
        <mps-favorite-media [item]="item"></mps-favorite-media>
        <figure (click)="clearSearch.emit()">
            <a [routerLink]="['/details', mediaType, item.id]" >
                <img [src]="utilsProvider.backdropImage(item.backdrop_path)" alt="{{ utilsProvider.title(item) }}">
            </a>
            <figcaption><a [routerLink]="['/details', mediaType, item.id]">{{ utilsProvider.title(item) }}</a></figcaption>
        </figure>
        <p *ngIf="showOverview" (click)="clearSearch.emit()">
            <a [routerLink]="['/details', mediaType, item.id]">{{ item.overview | slice:0:140 }}</a>
        </p>
    </div>
  `
})
export class CardBackdropImageComponent {
    @Input() item: Media[];
    @Input() mediaType: string;
    @Input() className: string;
    @Input() showOverview: boolean;
    @Output() clearSearch = new EventEmitter<any>();

    constructor(
        public utilsProvider: UtilsProvider
    ) { }
}
