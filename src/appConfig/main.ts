import { Home } from '../app/packs/home'
import { FourZeroFour } from '../app/packs/404'
import { FiveZeroZero } from '../app/packs/500'

/**
 * Exports the NgPacks that will be loaded and merged into config
 * Order Matters
 */
export const main = {
  packs: [
    Home,
    FourZeroFour,
    FiveZeroZero
  ]
}
