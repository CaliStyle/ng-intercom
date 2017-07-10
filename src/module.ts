import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Intercom } from './providers/intercom';
import { IntercomConfig } from './types/intercom-config';
import loadScripts from './load-intercom.js';


@NgModule({
    imports: [CommonModule]
})
export class IntercomModule {
    static forRoot(config: IntercomConfig): ModuleWithProviders {
        loadScripts(config.app_id);
        return {
            ngModule: IntercomModule,
            providers: [
                Intercom
            ]
        }
    }
}