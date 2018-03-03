import { Directive, HostListener, Input } from '@angular/core'

import { Intercom } from '../intercom/intercom'

@Directive({
  selector: '[intercomHide]'
})
export class IntercomHideDirective {
  @Input() intercomHide: boolean

  constructor(
    private intercom: Intercom
  ) { }

  @HostListener('click')
  onClick() {
    if (this.intercomHide !== false) {
        this.intercom.hide()
    }
  }
}
