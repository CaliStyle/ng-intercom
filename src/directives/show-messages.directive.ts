import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../providers/intercom';

@Directive({
    selector: '[intercomShowMessages]'
})
export class IntercomShowMessagesDirective {
    @Input() intercomShowMessages: boolean;
    constructor(
        private intercom: Intercom
    ) { }

    @HostListener('click')
    onClick() {
        if (this.intercomShowMessages != false) {
            this.intercom.showMessages();
        }
    }
}
