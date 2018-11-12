import { Injectable } from '@angular/core'

@Injectable()
export class IntercomConfig {
  appId: string
  updateOnRouterChange?: boolean
  alignment?: 'left' | 'right'
}
