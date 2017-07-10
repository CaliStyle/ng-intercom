import { Directive, HostListener } from '@angular/core';
import { Intercom } from '../providers/intercom';

@Directive({
    selector: '[showIntercom]'
})
export class ShowIntercomDirective {
    constructor(
        private intercom: Intercom
    ) { }

    @HostListener('click', ['$event'])
    onClick(event) {
        this.intercom.show();
    }
}
