import { Request, Response } from 'express'
const Controller = require('trails/controller')

/**
 * @module ViewController
 */

export class ViewController extends Controller {
  /**
   *
   * @param req
   * @param res
   */
  index(req: Request, res: Response) {
    this.app.log.debug(`ssr: ${req ? req.originalUrl : 'Unknown' }`)
    res.render('index', { req, res })
  }
}
