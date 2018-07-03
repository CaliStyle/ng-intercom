/**
 * Spool Configuration
 * (app.config.main)
 *
 * @see https://fabrix.app/doc/config/main
 */

import { resolve, join } from 'path'
const DIST_FOLDER = join(process.cwd(), 'dist')

import { REPLSpool } from '@fabrix/spool-repl'
import { RouterSpool } from '@fabrix/spool-router'
import { ExpressSpool } from '@fabrix/spool-express'

export const main = {

  /**
   * Order does *not* matter. Each module is loaded according to its own
   * requirements.
   */
  spools: [
    REPLSpool,
    RouterSpool,
    ExpressSpool
  ],

  /**
   * Define application paths here. "root" is the only required path.
   */
  paths: {
    root: resolve(join(DIST_FOLDER)),
    temp: resolve(join(DIST_FOLDER, 'browser')),
    www: resolve(join(DIST_FOLDER, 'browser'))
  }
}
