import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs';

import { Media } from '@platform/core/models';

const STORAGE_KEY = 'favorites';

@Injectable()
export class FavoritesService {
    private favorites: Media[] = [];
    constructor(
        private storage: LocalStorageService
    ) {
        this.favorites = this.storage.get(STORAGE_KEY) || this.favorites;
    }

    getAll(): Observable<Media[]> {
        return Observable.of(this.favorites);
    }

    save(favorite: Media): Observable<boolean> {
        this.favorites = [...this.favorites, favorite];
        return Observable.of(this.storage.set(STORAGE_KEY, this.favorites));
    }
    remove(favorite: Media): Observable<boolean> {
        this.favorites = this.favorites.filter(item => item.id !== favorite.id);
        return Observable.of(this.storage.set(STORAGE_KEY, this.favorites));
    }

}
