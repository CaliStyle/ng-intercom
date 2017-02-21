import { IntercomBrowser } from './intercom.browser'
import { Intercom, IntercomEnvironment } from './intercom'

import { provide } from '@angular/core'

export const BROWSER_INTERCOM_PROVIDERS = [
  IntercomBrowser,
  { provide: IntercomEnvironment, useClass: IntercomBrowser },
  Intercom
];
