import { IntercomBrowser } from './intercom.browser'
import { Intercom, IntercomEnvironment } from './intercom'


export const BROWSER_INTERCOM_PROVIDERS = [
  IntercomBrowser,
  { provide: IntercomEnvironment, useClass: IntercomBrowser },
  Intercom
];
