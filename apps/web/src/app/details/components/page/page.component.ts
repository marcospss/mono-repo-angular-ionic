import { Component, OnInit, Input } from '@angular/core';

import { Details, Credits, Discover } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';

@Component({
    selector: 'mps-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    @Input() details: Details[];
    @Input() credits: Credits[];
    @Input() recommendations: Discover[];

    constructor(
        public utilsProvider: UtilsProvider
    ) { }

    ngOnInit() {
    }

    get genres(): string {
        return this.details && this.details['genres'].map((genre: any) => genre.name).join(' | ');
    }

    get voteAverage(): number {
        return this.details && (this.details['vote_average'] * 10);
    }

    get runtime(): string {
        const time = this.details && (this.details['runtime']);
        return this.utilsProvider.convertMinutesToTime(time);
    }

}
