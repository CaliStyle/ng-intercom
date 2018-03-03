'use strict'
const path = require('path')
const DIST_FOLDER = path.join(process.cwd(), 'dist', 'server.test')
const TrailsApp = require('trails')

before(() => {
  global.app = new TrailsApp(require(DIST_FOLDER).trailsConfig)
  return global.app.start().catch(global.app.stop)
})

after(() => {
  return global.app.stop()
})
