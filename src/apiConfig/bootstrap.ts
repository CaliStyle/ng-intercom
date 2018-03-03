'use strict'

// const ServerUtils = require('../api/utils/ServerUtils')

/**
 * Bootstrap function called when Trails server is ready
 * @param app Trails application
 */
export const bootstrap = (app) => {
  // app.services.WebSocketService.init()
  // app.services.FixturesService.initializeData().catch(err => app.log.error('initializeData', err))

  /*setTimeout(()=> {
    app.orm.Notification.create({template: 'test', subject: 'Test notification', message: 'Hello man', userId: 1}).then(notif => {
      app.log.debug('notif created')
    })
  }, 6000)*/

  // ServerUtils.buildBrowserRoutes()

}
