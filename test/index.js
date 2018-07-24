'use strict'
const path = require('path')
const DIST_FOLDER = path.join(process.cwd(), 'dist', 'server.test')
const FabrixApp = require('@fabrix/fabrix').FabrixApp

before(() => {
  global.app = new FabrixApp(require(DIST_FOLDER).fabrixConfig)
  return global.app.start().catch(global.app.stop)
})

after(() => {
  return global.app.stop()
})
