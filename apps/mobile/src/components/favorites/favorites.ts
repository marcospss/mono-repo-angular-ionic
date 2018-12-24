import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Media } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';

@Component({
  selector: 'favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesComponent {
  @Input() medias: Media[];
  @Output() removeItem = new EventEmitter<Media>();
  @Output() moreInfo = new EventEmitter<Media>();

  constructor(
    public utilsProvider: UtilsProvider
  ) {}

}
