import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IntercomHideDirective } from './directives/hide.directive';
import { IntercomShowMessagesDirective } from './directives/show-messages.directive';
import { IntercomShowNewMessageDirective } from './directives/show-new-message.directive';
import { IntercomShowDirective } from './directives/show.directive';
import { IntercomShutdownDirective } from './directives/shutdown.directive';
import { IntercomTrackEventDirective } from './directives/track-event.directive';
import loadScripts from './load-intercom.js';
import { Intercom } from './providers/intercom';
import { IntercomConfig } from './types/intercom-config';


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
    static instantiations = 0;
    static forRoot(config: IntercomConfig): ModuleWithProviders {
        if (this.instantiations > 0) {
            this.instantiations++;
            throw new Error(
                `IntercomModule should only be instantiated once, in your highest module.
                You have tried to instantiate IntercomModule ${this.instantiations} times.
                If you need to access directives in a child module, import IntercomModule without forRoot().`
            )
        }
        loadScripts(config.app_id);
        this.instantiations++;
        return {
            ngModule: IntercomModule,
            providers: [
                Intercom
            ]
        }
    }
}