import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import {
    Intercom, IntercomConfig, IntercomHideDirective, IntercomShowDirective,
    IntercomShowMessagesDirective, IntercomShowNewMessageDirective,
    IntercomShutdownDirective, IntercomTrackEventDirective
} from '../index'
import { IntercomMocks } from './intercom-mocks'


@NgModule({
    imports: [
        RouterTestingModule
    ],
    declarations: [
        // IntercomHideDirective,
        // IntercomShowMessagesDirective,
        // IntercomShowNewMessageDirective,
        // IntercomShowDirective,
        // IntercomShutdownDirective,
        // IntercomTrackEventDirective
    ],
    exports: [
        // IntercomHideDirective,
        // IntercomShowMessagesDirective,
        // IntercomShowNewMessageDirective,
        // IntercomShowDirective,
        // IntercomShutdownDirective,
        // IntercomTrackEventDirective
    ],
    providers: [
        {
            provide: Intercom,
            useClass: IntercomMocks
        }
    ]
})
export class IntercomTestingModule {
    static forRoot(config: IntercomConfig): ModuleWithProviders {
        return {
            ngModule: IntercomTestingModule,
            providers: [
                { provide: IntercomConfig, useValue: config },
                { provide: Intercom, useClass: IntercomMocks }
            ]
        }
    }
}
