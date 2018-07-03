import 'zone.js/dist/zone-node'
import 'reflect-metadata'
import { renderModuleFactory } from '@angular/platform-server'
import { ngExpressEngine } from '@nguniversal/express-engine'
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader'
import * as express from 'express'

import { join } from 'path'

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('main.server')

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const DIST_FOLDER = join(process.cwd(), 'dist')

/**
 * Server Configuration
 * (app.config.web)
 *
 * Configure the Web Server
 *
 * @see {@link https://fabrix.app/doc/config/web}
 */
export const web = {
  express: express,

  /**
   * CORS options
   * Can be true/false or an object of CORS options
   * @see {@link https://github.com/expressjs/cors#configuring-cors}
   */
  cors: false,

  /**
   * Middlewares to load (in order)
   */
  middlewares: {

    // middlewares loading order
    order: [
      // 'redirect',
      'nonWww',
      'https',
      'static',
      'addMethods',
      'cookieParser',
      'session',
      // 'passportInit',
      // 'passportSession',
      // 'proxyCartInit',
      // 'proxyCartSession',
      // 'proxyCartSessionCart',
      // 'proxyCartSessionCustomer',
      'bodyParser',
      'compression',
      'methodOverride',
      'poweredBy',
      'www',
      // 'proxyRouter',
      'router',
      '404',
      '500'
    ],
    /**
     * Middlewares to load for body parsing
     */
    // bodyParser: [
    //   bodyParser.json(),
    //   bodyParser.urlencoded({extended: false})
    // ],
    bodyParser: bodyParser.json(),
    cookieParser: cookieParser('proxy-engine'),
    compression: require('compression')({
      level: 9,
      threshold: 4096
    }),
    poweredBy: function(req, res, next) {
      res.set('X-Powered-By', 'Proxy Engine <cali-style.com>')
      next()
    },
    // proxyRouter: function(req, res, next) {
    //   return require('trailpack-proxy-router/lib').Middleware.proxyRouter(req, res, next)
    // },
    // redirect: function(app, next) {
    //   redirect(app)
    //   app.redirect('/cali-style.php?Action=2&k=node.js-development-company', '/', 301);
    //   next()
    // },
    nonWww: function(req, res, next) {
      // console.log("ENV NON_WWW", process.env.NON_WWW, req.host)
      if (process.env.NON_WWW && req.host.match(/^www/) !== null ) {
        if (process.env.FORCE_HTTPS) {
          if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect('https://' + req.host.replace(/^www\./, '') + req.url)
          }
        }
        else {
          return res.redirect('http://' + req.host.replace(/^www\./, '') + req.url)
        }
      }
      next()
    },
    https: function(req, res, next) {
      // console.log("ENV FORCE_HTTPS", process.env.FORCE_HTTPS, req.headers['x-forwarded-proto'])
      if (process.env.FORCE_HTTPS) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
          return res.redirect('https://' + req.host + req.url)
        }
      }
      next()
    },
    static: express.static(join(DIST_FOLDER, 'browser'), {index: false})

  },

  /***************************************************************************
   *                                                                          *
   * The number of seconds to cache flat files on disk being served by        *
   * Express static middleware (by default, these files are in `.tmp/public`) *
   *                                                                          *
   * The HTTP static cache is only active in a 'production' environment,      *
   * since that's the only time Express will cache flat-files.                *
   *                                                                          *
   ***************************************************************************/

  cache: process.env.EXPRESS_CACHE || 31557600000,

  /**
   * The host to bind the web server to
   */

  host: process.env.HOST || '0.0.0.0',
  /**
   * The port to bind the web server to
   */
   // We have to Remove this for Webpack Heroku
  // port: process.env.PORT,

  /**
   * Alternate method to add multiple template engine, for single view template use config.views.engine
   */
  views: {
    engines: {
      'ng.html': ngExpressEngine({
        bootstrap: AppServerModuleNgFactory,
        providers: [
          provideModuleMap(LAZY_MODULE_MAP)
        ]
      })
    },
    path: join('dist', 'browser', 'views')
  }

  /**
   * SSL options
   * Cert and key or pfx to create HTTPS server
   */
  /*
  ssl: {
    key: fs.readFileSync('path/to/private.key'),
    cert: fs.readFileSync('path/to/certificate.pem')
    //OR pfx: fs.readFileSync('path/to/server.pfx')
  },
   */
  /**
   * Automatically redirect HTTP to HTTPS
   * Create an HTTP server who redirect to HTTPS server
   * Work only if SSL is enabled
   */
  // redirectToHttps: false,

  /**
   * Http port to use if you want to enable http and https
   * SSL need to be enabled
   */
  // portHttp: 80
}
