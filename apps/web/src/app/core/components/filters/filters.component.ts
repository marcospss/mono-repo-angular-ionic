import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, } from "@angular/forms";

import { Genres } from '@models';

@Component({
    selector: 'mps-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
    years: Array<number> = [];
    filters: FormGroup;
    @Input() genres: Genres[];
    @Output() filterMovies = new EventEmitter<any>();

    private date: Date = new Date();
    private currentYear: number = this.date.getFullYear();
    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {

        this.getYears();
        this.filters = this.formBuilder.group({
            mediaType: 'movie',
            year: '',
            sortBy: 'popularity.desc',
            genre: ''
        });
    }

    /**
   * Get Years
   * Return list years
   */
    getYears(): void {
        for (let year = this.currentYear + 1; year >= 1900; year -= 1) {
            this.years.push(year);
        }
    }

    filterMedia():void {
        this.filterMovies.emit(this.filters.getRawValue());
      }

}
