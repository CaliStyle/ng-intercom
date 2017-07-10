import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../providers/intercom';

@Directive({
    selector: '[intercomShowMessages]'
})
export class IntercomShowMessagesDirective {

    constructor(
        private intercom: Intercom
    ) { }

    @HostListener('click', ['$event'])
    onClick(event) {
        this.intercom.showMessages();
    }
}
