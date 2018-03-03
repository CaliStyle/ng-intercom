/**
 * Exports a Configuration for a Trails server to be used in tests
 */

import 'reflect-metadata'
import 'zone.js/dist/zone-node'
import { enableProdMode } from '@angular/core'
enableProdMode()

const trailsConfig = require('./trails.config')

module.exports.trailsConfig = trailsConfig
