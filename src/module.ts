import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntercomBrowser } from './providers/intercom.browser';
import { Intercom, IntercomEnvironment } from './providers/intercom';


@NgModule({
    imports: [CommonModule]
})
export class IntercomModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IntercomModule,
            providers: [
                IntercomBrowser,
                { provide: IntercomEnvironment, useClass: IntercomBrowser },
                Intercom
            ]
        }
    }
}