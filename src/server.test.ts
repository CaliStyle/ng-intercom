/**
 * Exports a Configuration for a Fabrix server to be used in tests
 */

import 'reflect-metadata'
import 'zone.js/dist/zone-node'
import { enableProdMode } from '@angular/core'
enableProdMode()

const fabrixConfig = require('./fabrix.config')

module.exports.fabrixConfig = fabrixConfig
