import {Directive, HostListener, Input} from '@angular/core'

import {Intercom} from '../intercom/intercom'

@Directive({
  selector: '[intercomTrackEvent]'
})
export class IntercomTrackEventDirective {
  @Input() event: string
  @Input() intercomTrackEvent: string
  @Input() metadata: any

  constructor(private intercom: Intercom) {
  }

  @HostListener('click')
  onClick() {
    const e = this.event ? this.event : this.intercomTrackEvent
    if (e && this.metadata) {
      this.intercom.trackEvent(e, this.metadata)
    }
    else if (e && !this.metadata) {
      this.intercom.trackEvent(e)
    }
    else {
      throw new Error('Error in intercomTrackEvent directive: You must specify an event to track.')
    }
  }
}
