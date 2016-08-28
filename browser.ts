import { IntercomBrowser } from './intercom.browser'
import { Intercom, IntercomEnviroment } from './intercom'

import { provide } from '@angular/core'

export const BROWSER_INTERCOM_PROVIDERS = [
  IntercomBrowser,
  { provide: IntercomEnviroment, useClass: IntercomBrowser },
  Intercom
];
