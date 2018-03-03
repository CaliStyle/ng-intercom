/**
 * Database Configuration
 * (app.config.database)
 *
 * Configure the ORM layer, connections, etc.
 *
 * @see {@link http://trailsjs.io/doc/config/database}
 */

'use strict'

export const database = {

  /**
   * Define the database stores. A store is typically a single database.
   *
   * Set production connection info in config/env/production/database.ts
   */
  stores: {
    sqlitedev: {
      database: 'dev',
      storage: './dist/dev.sqlite',
      host: '127.0.0.1',
      dialect: 'sqlite'
    }
  },

  models: {
    defaultStore: 'sqlitedev',
    migrate: 'drop'
  }
}
