import {
    NgModule,
    ModuleWithProviders,
    Optional,
    SkipSelf,
    ErrorHandler
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicErrorHandler } from 'ionic-angular';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@environments';
import { CoreServiceModule } from '@platform/core/services/core-service.module';
import { reducers, metaReducers } from './../app/reducers';

import { InterceptorService, NotificationsService, FavoritesService } from './services';
import { FavoritesPageModule } from './../pages/favorites/favorites.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        IonicStorageModule.forRoot({
            name: environment.dbName,
            storeName: environment.storeName,
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
        CoreServiceModule.forRoot(),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
        FavoritesPageModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        },
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        },
        NotificationsService,
        FavoritesService
    ]
})

export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule
        };
    }
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('Core Module is already loaded. Import it in the AppModule only');
        }
    }
}
