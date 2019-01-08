import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, } from "@angular/forms";
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { fromSearchReducer, SearchActions } from "@platform/core/state/search";
import { MultiSearch } from "@platform/core/models";
import { UtilsProvider } from "@platform/core/services";

@Component({
    selector: 'mps-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
    searchMedias$: Observable<MultiSearch[]>;
    search: FormGroup;
    showInput = false;
    constructor(
        private store: Store<fromSearchReducer.StateSearch>,
        public utilsProvider: UtilsProvider,
        private formBuilder: FormBuilder
    ) {
        this.searchMedias$ = store.pipe(select(fromSearchReducer.getSearchResult));
    }

    ngOnInit() {
        this.search = this.formBuilder.group({
            query: null
        });
    }

    showSearch(): void {
        this.store.dispatch(new SearchActions.SearchClearAll());
        this.showInput = !this.showInput;
    }

    searchMedia(query: string) {
        this.store.dispatch(new SearchActions.SearchQuery(query));
    }


}
