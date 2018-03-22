import {Directive, HostListener, Input} from '@angular/core'

import {Intercom} from '../intercom/intercom'

/* tslint:disable:directive-selector */
@Directive({
  selector: '[intercomShutdown]'
})
export class IntercomShutdownDirective {
  @Input() intercomShutdown: boolean

  constructor(private intercom: Intercom) {
  }

  @HostListener('click')
  public onClick(): void {
    if (this.intercomShutdown !== false) {
      this.intercom.shutdown()
    }
  }
}
