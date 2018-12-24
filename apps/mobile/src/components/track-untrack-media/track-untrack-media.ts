import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Observable } from 'rxjs';

import { Media } from '@platform/core/models';
// import { FavoritesProvider } from '@platform/core/services';

@Component({
  selector: 'track-untrack-media',
  templateUrl: 'track-untrack-media.html'
})
export class TrackUntrackMediaComponent {
  @Input() media: Media;
  @Output() addItem = new EventEmitter<Media>();
  @Output() removeItem = new EventEmitter<Media>();
  isSelectedBookInCollection: boolean;
  constructor(
    // private db: FavoritesProvider
    ) {
      //
  }

  ionViewDidLoad() {
    // this.isSelectedBookInCollection = this.db.inCollection(this.media);
  }

}
