import {Directive, HostListener, Input} from '@angular/core'

import {Intercom} from '../intercom/intercom'

@Directive({
  selector: '[intercomShutdown]'
})
export class IntercomShutdownDirective {
  @Input() intercomShutdown: boolean

  constructor(private intercom: Intercom) {
  }

  @HostListener('click')
  onClick() {
    if (this.intercomShutdown != false) {
      this.intercom.shutdown()
    }
  }
}
