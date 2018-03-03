import {Directive, HostListener, Input} from '@angular/core'

import {Intercom} from '../intercom/intercom'

@Directive({
  selector: '[intercomShowMessages]'
})
export class IntercomShowMessagesDirective {
  @Input() intercomShowMessages: boolean

  constructor(private intercom: Intercom) {
  }

  @HostListener('click')
  onClick() {
    if (this.intercomShowMessages != false) {
      this.intercom.showMessages()
    }
  }
}
