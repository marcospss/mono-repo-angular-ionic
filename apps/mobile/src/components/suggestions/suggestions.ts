import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Discover, Media } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';

@Component({
  selector: 'suggestions',
  templateUrl: 'suggestions.html'
})
export class SuggestionsComponent {
  @Input() recommendations: Discover[];
  @Input() mediaType: string;
  constructor(
    public navCtrl: NavController,
    public utilsProvider: UtilsProvider
  ) {}

  /**
   * Navigate to the detail page for this item.
   */
  moreInfo(item: Media) {
    this.navCtrl.setRoot('ItemDetailPage', {
      item: item,
      mediaType: this.mediaType
    });
  }

}
