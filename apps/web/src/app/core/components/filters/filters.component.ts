import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, } from "@angular/forms";

import { Genres } from '@models';

@Component({
    selector: 'mps-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
    years: Array<number> = this.getYears();
    filters: FormGroup;
    @Input() genres: Genres[];
    @Output() filterMovies = new EventEmitter<any>();
    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
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
    getYears(): number[] {
        const arrYears: Array<number> = [],
            date: Date = new Date(),
            currentYear: number = date.getFullYear();

        for (let year = currentYear + 1; year >= 1900; year -= 1) {
            arrYears.push(year);
        }
        return arrYears;
    }

    filterMedia():void {
        this.filterMovies.emit(this.filters.getRawValue());
      }

}
