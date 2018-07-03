import { Request, Response } from 'express'
import { FabrixController as Controller } from '@fabrix/fabrix/dist/common'

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
