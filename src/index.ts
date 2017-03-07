import { NgModule, ModuleWithProviders } from '@angular/core';
import { Intercom } from './intercom';
import { BROWSER_INTERCOM_PROVIDERS } from './browser';
import { NODE_INTERCOM_PROVIDERS } from './node';

@NgModule()
export class IntercomModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IntercomModule,
            providers: [
                Intercom,
                ...BROWSER_INTERCOM_PROVIDERS,
                ...NODE_INTERCOM_PROVIDERS
            ]
        }
    }
}

export { Intercom } from './intercom';