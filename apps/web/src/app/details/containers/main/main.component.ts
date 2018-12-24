import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { fromItemDetail } from '@platform/core/state/item-detail';
import { Details, Credits, Discover } from '@platform/core/models';
import { DetailsActions, CreditsActions, RecommendationsActions } from '@platform/core/state/item-detail';

import { UtilsProvider } from '@platform/core/services';

@Component({
    selector: 'mps-main',
    template: `
    <mps-page *ngIf="details$ | async; let details; else loading" [details]="details"></mps-page>
    <ng-template #loading>
        <mps-loading-animation></mps-loading-animation>
    </ng-template>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, OnDestroy {
    details$: Observable<Details[]>;
    credits$: Observable<Credits[]>;
    recommendations$: Observable<Discover[]>;

    private idMedia: number;
    private mediaType: string;
    private subscriptionRoute: Subscription;

    constructor(
        private store: Store<fromItemDetail.ItemDetailStates>,
        public utilsProvider: UtilsProvider,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.details$ = store.pipe(select(fromItemDetail.getDetailsResults));
        this.credits$ = store.pipe(select(fromItemDetail.getCreditsResults));
        this.recommendations$ = store.pipe(select(fromItemDetail.getRecommendationsResults));
    }

    ngOnInit() {
        const filterDetailsProperties = {
            id: this.idMedia,
            mediaType: this.mediaType
        };

        this.subscriptionRoute = this.route.params.subscribe(
            (params: any) => {
                filterDetailsProperties.mediaType = params['mediaType'];
                filterDetailsProperties.id = params['mediaId'];
            }
        );

        this.store.dispatch(new DetailsActions.FilterPropertiesDetails(filterDetailsProperties));
        this.store.dispatch(new CreditsActions.FilterPropertiesCredits(filterDetailsProperties));
        this.store.dispatch(new RecommendationsActions.FilterPropertiesRecommendations(filterDetailsProperties));
    }

    ngOnDestroy() {
        this.subscriptionRoute.unsubscribe();
    }

}
