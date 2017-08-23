import { CONFIG, Intercom } from './providers/intercom';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IntercomConfig } from './types/intercom-config';
import { IntercomHideDirective } from './directives/hide.directive';
import { IntercomShowDirective } from './directives/show.directive';
import { IntercomShowMessagesDirective } from './directives/show-messages.directive';
import { IntercomShowNewMessageDirective } from './directives/show-new-message.directive';
import { IntercomShutdownDirective } from './directives/shutdown.directive';
import { IntercomTrackEventDirective } from './directives/track-event.directive';
import { loadIntercom } from './util/load-intercom';

@NgModule({
    imports: [CommonModule],
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
                { provide: CONFIG, useValue: config },
                Intercom,
            ]
        }
    }
}