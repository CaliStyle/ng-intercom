/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

export const routes = [
  // Handle 404s and more
  {
    method: [ 'GET' ],
    path: '/404',
    handler: 'ViewController.index',
    config: {}
  },
  {
    method: [ 'GET' ],
    path: '/500',
    handler: 'ViewController.index',
    config: {}
  },
  {
    method: [ 'GET' ],
    path: '/403',
    handler: 'ViewController.index',
    config: {}
  },
  {
    method: [ 'GET' ],
    path: '/401',
    handler: 'ViewController.index',
    config: {}
  },
  /**
   * Render the view
   */
  // Home
  {
    method: [ 'GET' ],
    path: '/',
    handler: 'ViewController.index',
    config: {}
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info',
    config: {
      app: {
        proxyRouter: {
          ignore: true
        }
      }
    }
  }

  // Proxy Router
  // {
  //   method: [ 'GET' ],
  //   path: '/api/v1/proxy/*',
  //   handler: 'ViewController.proxyRouter',
  //   config: {}
  // }
]
