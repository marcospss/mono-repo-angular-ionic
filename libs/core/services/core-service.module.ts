import {
    NgModule,
    ModuleWithProviders,
    Optional,
    SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DiscoverProvider } from './discover/discover';
import { SearchProvider } from './search/search';
import { CommonProvider } from './common/common';

import { UtilsProvider } from './utils/utils';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        DiscoverProvider,
        SearchProvider,
        CommonProvider,
        UtilsProvider
    ]
 })

 export class CoreServiceModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreServiceModule
        };
    }
 constructor(
     @Optional()
     @SkipSelf()
     parentModule: CoreServiceModule
     ) {
        if (parentModule) {
            throw new Error('Core Service Module is already loaded. Import it in the AppModule only');
        }
    }
 }
