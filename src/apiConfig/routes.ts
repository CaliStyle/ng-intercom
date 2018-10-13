/**
 * Routes Configuration
 * (fabrix.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see https://fabrix.app/docs/config/routes.js
 */

export const routes = {
  // Handle 404s and more
  '/404': {
    'GET': 'ViewController.index',
    config: {}
  },
  '/500': {
    'GET': 'ViewController.index',
    config: {}
  },
  '/403': {
    'GET': 'ViewController.index',
    config: {}
  },
  '/401': {
    'GET': 'ViewController.index',
    config: {}
  },
  /**
   * Render the view
   */
  // Home
  '/': {
    'GET': 'ViewController.index',
    config: {}
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  '/api/v1/default/info': {
    'GET': 'DefaultController.info'
  }
}
