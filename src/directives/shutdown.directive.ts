import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../providers/intercom';

@Directive({
    selector: '[intercomShutdown]'
})
export class IntercomShutdownDirective {
    constructor(
        private intercom: Intercom
    ) { }

    @HostListener('click', ['$event'])
    onClick(event) {
        this.intercom.shutdown();
    }
}
