
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing-module';
import { CoreModule } from './core/core.module';
import { reducers, metaReducers } from './reducers';

import { RootComponent } from './core/containers/root/root.component';
import { CoreServiceModule } from '@platform/core/services/core-service.module';
import { SearchEffects  } from "@platform/core/state/search/effects/search.effects";

import { environment } from '@environments';

@NgModule({
    imports: [
        BrowserModule,
        NxModule.forRoot(),
        AppRoutingModule,
        CoreModule,
        CoreServiceModule.forRoot(),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([SearchEffects]),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : []
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: environment.baseHref
        }
    ],
    bootstrap: [RootComponent]
})
export class AppModule {
}
