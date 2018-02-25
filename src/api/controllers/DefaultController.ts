import { Request, Response } from 'express'
const Controller = require('trails/controller')

/**
 * @module DefaultController
 *
 * @description Default Controller included with a new Trails app
 * @see {@link http://trailsjs.io/doc/api/controllers}
 * @this TrailsApp
 */

export class DefaultController extends Controller {
  /**
   * Return some info about this application
   */
  info(req: Request, res: Response) {
    res.status(200).json(this.app.services.DefaultService.getApplicationInfo())
  }
}
