import { IntercomNode } from './intercom.node'
import { Intercom, IntercomEnviroment} from './intercom'

import { provide } from '@angular/core'

export const NODE_INTERCOM_PROVIDERS = [
  IntercomNode,
  { provide: IntercomEnviroment, useClass: IntercomNode },
  Intercom
];
