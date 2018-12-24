import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Media } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';

@Component({
  selector: 'list-media',
  templateUrl: 'list-media.html'
})
export class ListMediaComponent {
  @Input() medias: Media[];
  @Input() mediaType: string;
  @Output() addItem = new EventEmitter<Media>();
  @Output() removeItem = new EventEmitter<Media>();
  @Output() moreInfo = new EventEmitter<Media>();
  constructor(
    public navCtrl: NavController,
    public utilsProvider: UtilsProvider
    ) { }

}
