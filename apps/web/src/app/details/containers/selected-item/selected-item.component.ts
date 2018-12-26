import { Component, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { fromItemDetail } from '@platform/core/state/item-detail';
import { Details, Credits, Discover } from '@platform/core/models';
import { DetailsActions, CreditsActions, RecommendationsActions } from '@platform/core/state/item-detail';

import { UtilsProvider } from '@platform/core/services';
import { map } from 'rxjs/operator/map';

@Component({
    selector: 'mps-selected-item',
    template: `
    <mps-page *ngIf="details$ | async; let details; else loading"
        [details]="details"
        [credits]="credits$ | async"
        [recommendations]="recommendations$ | async">
    </mps-page>
    <ng-template #loading>
        <mps-loading-animation></mps-loading-animation>
    </ng-template>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedItemComponent implements DoCheck {
    details$: Observable<Details[]>;
    credits$: Observable<Credits[]>;
    recommendations$: Observable<Discover[]>;

    constructor(
        private store: Store<fromItemDetail.ItemDetailStates>,
        public utilsProvider: UtilsProvider
    ) {
        this.details$ = store.pipe(select(fromItemDetail.getDetailsResults));
        this.credits$ = store.pipe(select(fromItemDetail.getCreditsResults));
        this.recommendations$ = store.pipe(select(fromItemDetail.getRecommendationsResults));
    }

    ngDoCheck(): void {
        this.utilsProvider.scrollTopPage();
    }
}
