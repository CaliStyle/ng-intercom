import { IntercomNode } from './intercom.node'
import { Intercom, IntercomEnvironment} from './intercom'

import { provide } from '@angular/core'

export const NODE_INTERCOM_PROVIDERS = [
  IntercomNode,
  { provide: IntercomEnvironment, useClass: IntercomNode },
  Intercom
];
