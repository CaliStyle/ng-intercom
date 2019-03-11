import { Injectable } from '@angular/core'

@Injectable()
export class IntercomConfig {
  appId: string
  updateOnRouterChange?: boolean
  /**
   * Customize left or right position of messenger
   */
  alignment?: 'left' | 'right'
  /**
   * Customize horizontal padding
   */
  horizontal_padding?: number

  /**
   * Customize vertical padding
   */
  vertical_padding?: number

  /**
   * arbitrarily localize your intercom messenger
   */
  language_override?: string
}
