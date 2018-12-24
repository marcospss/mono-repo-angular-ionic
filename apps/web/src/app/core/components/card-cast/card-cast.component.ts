import { Component, Input } from '@angular/core';

import { Credits } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';

@Component({
  selector: 'mps-card-cast',
  template: `
  <div class="team">
    <figure class="team-image">
        <img [src]="utilsProvider.profileImage(item.profile_path)" alt="{{ item.name }}">
    </figure>
    <h2 class="team-name">{{ item.character }}</h2>
    <small class="team-title">{{ item.name }}</small>
</div>
  `,
  styles: [
    `
    .team {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 10px;
    }
    .team .team-image {
        width: 160px;
        height: 200px;
    }
    `
]
})
export class CardCastComponent {
    @Input() item: Credits[];

    constructor(
        public utilsProvider: UtilsProvider
    ) { }


}
