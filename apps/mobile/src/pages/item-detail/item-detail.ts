import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { fromItemDetail } from '@platform/core/state/item-detail';
import { Media, Credits, Discover } from '@platform/core/models';
import { DetailsActions } from '@platform/core/state/item-detail';

import { UtilsProvider } from '@platform/core/services';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  item: Media;
  mediaType: string;
  content: string = 'overview';
  credits$: Observable<Credits[]>;
  recommendations$: Observable<Discover[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store<fromItemDetail.ItemDetailStates>,
    public utilsProvider: UtilsProvider
    ) {
    this.item = navParams.get('item');
    this.mediaType = navParams.get('mediaType');
    this.credits$ = store.pipe(select(fromItemDetail.getCreditsResults));
    this.recommendations$ = store.pipe(select(fromItemDetail.getRecommendationsResults));
  }

  ionViewDidLoad() {
    const filterProperties = {
      mediaType: this.mediaType,
      mediaId: this.item.id
    };
    this.store.dispatch(new DetailsActions.SelectItem(filterProperties));
  }

  get title(): string {
    return this.utilsProvider.title(this.item);
  }

  get overview(): string {
    return this.item.overview;
  }

  get backdropImage(): string {
    return this.utilsProvider.backdropImage(this.item.backdrop_path,'w780');
  }

}
