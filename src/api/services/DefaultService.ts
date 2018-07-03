import { FabrixService as Service } from '@fabrix/fabrix/dist/common'

/**
 * @module DefaultService
 *
 * @description Default Service included with a new fabrix app
 * @see {@link http://fabrixjs.io/doc/api/services}
 * @this fabrixApp
 */
export class DefaultService extends Service {

  /**
   * Return some info about this application
   */
  getApplicationInfo() {
    const spools = []
    Object.keys(this.app.spools).forEach(packName => {
      if (packName !== 'inspect') {
        const pack = this.app.spools[packName]
        spools.push({
          name: pack.name,
          version: pack.pkg.version
        })
      }
    })
    return {
      app: this.app.pkg.version,
      node: process.version,
      libs: process.versions,
      spools: spools
    }
  }
}
