import { Component, Input } from '@angular/core';

import { Credits } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';

@Component({
  selector: 'credits',
  templateUrl: 'credits.html'
})
export class CreditsComponent {
  @Input() credits: Credits[];

  constructor(
    public utilsProvider: UtilsProvider
  ) {}

}
