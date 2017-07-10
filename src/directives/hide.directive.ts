import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../providers/intercom';

@Directive({
    selector: '[intercomHide]'
})
export class IntercomHideDirective {
    constructor(
        private intercom: Intercom
    ) { }

    @HostListener('click', ['$event'])
    onClick(event) {
        this.intercom.hide();
    }
}
