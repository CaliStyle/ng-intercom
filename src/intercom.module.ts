import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { IntercomHideDirective } from './directives/hide.directive';
import { IntercomShowMessagesDirective } from './directives/show-messages.directive';
import { IntercomShowNewMessageDirective } from './directives/show-new-message.directive';
import { IntercomShowDirective } from './directives/show.directive';
import { IntercomShutdownDirective } from './directives/shutdown.directive';
import { IntercomTrackEventDirective } from './directives/track-event.directive';
import { Intercom } from './providers/intercom';
import { IntercomConfig } from './types/intercom-config';
import { loadIntercom } from './util/load-intercom';

export const CONFIG = new InjectionToken('CONFIG');

@NgModule({
    imports: [CommonModule],
    providers: [Intercom],
    declarations: [
        IntercomHideDirective,
        IntercomShowMessagesDirective,
        IntercomShowNewMessageDirective,
        IntercomShowDirective,
        IntercomShutdownDirective,
        IntercomTrackEventDirective
    ],
    exports: [
        IntercomHideDirective,
        IntercomShowMessagesDirective,
        IntercomShowNewMessageDirective,
        IntercomShowDirective,
        IntercomShutdownDirective,
        IntercomTrackEventDirective
    ]
})
export class IntercomModule {
    static forRoot(config: IntercomConfig): ModuleWithProviders {
        return {
            ngModule: IntercomModule,
            providers: [
                Intercom,
                { provide: CONFIG, useValue: config }
            ]
        }
    }
}