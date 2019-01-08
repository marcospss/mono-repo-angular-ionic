import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, } from "@angular/forms";
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { fromSearch, SearchActions } from "@platform/core/state/search";
import { MultiSearch } from "@platform/core/models";
import { UtilsProvider } from "@platform/core/services";

@Component({
    selector: 'mps-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    searchMedias$: Observable<MultiSearch[]>;
    search: FormGroup;
    showInput = false;
    constructor(
        private store: Store<fromSearch.SearchStates>,
        public utilsProvider: UtilsProvider,
        private formBuilder: FormBuilder
    ) {
        this.searchMedias$ = store.pipe(select(fromSearch.getSearchResult));
    }

    ngOnInit() {
        this.search = this.formBuilder.group({
            query: null
        });
    }

    showSearch(): void {
        this.store.dispatch(new SearchActions.SearchClearAll());
        this.search.reset();
        this.showInput = !this.showInput;
    }

    searchMedia(query: string) {
        this.store.dispatch(new SearchActions.SearchQuery(query));
    }

    clearSearch(): void {
        this.showSearch();
    }

}
