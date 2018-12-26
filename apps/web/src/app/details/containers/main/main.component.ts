import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { fromItemDetail } from '@platform/core/state/item-detail';
import { DetailsActions } from '@platform/core/state/item-detail';
import { map } from 'rxjs/operators';


@Component({
    selector: 'mps-main',
    template: `<mps-selected-item></mps-selected-item>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnDestroy {
    private subscriptionRoute: Subscription;

    constructor(
        private store: Store<fromItemDetail.ItemDetailStates>,
        private route: ActivatedRoute
    ) {
        this.subscriptionRoute = route.params.pipe(
            map(params => new DetailsActions.SelectItem(params))
        ).subscribe(store);
    }

    ngOnDestroy() {
        this.subscriptionRoute.unsubscribe();
    }

}
