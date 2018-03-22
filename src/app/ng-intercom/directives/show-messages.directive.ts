import {Directive, HostListener, Input} from '@angular/core'

import {Intercom} from '../intercom/intercom'

/* tslint:disable:directive-selector */
@Directive({
  selector: '[intercomShowMessages]'
})
export class IntercomShowMessagesDirective {
  @Input() intercomShowMessages: boolean

  constructor(private intercom: Intercom) {
  }

  @HostListener('click')
  public onClick(): void {
    if (this.intercomShowMessages !== false) {
      this.intercom.showMessages()
    }
  }
}
