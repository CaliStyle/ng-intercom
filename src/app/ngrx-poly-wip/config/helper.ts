import { Inject, Injectable } from '@angular/core'
import { PolyConfig, POLY_CONFIG } from './config'
import { POLY_FEATURE } from './feature'
import { POLY_DATA_SERVICES } from '../data/data-services'

@Injectable()
export class NgrxPolyHelperService {
  constructor(
    @Inject(POLY_FEATURE) public featureName: string,
    @Inject(POLY_CONFIG) public config: PolyConfig,
    @Inject(POLY_DATA_SERVICES) public dataServices
  ) {}

  getDataService(feature: string, entity: string) {
    console.log(this.dataServices)
    for (const i of this.dataServices) {
      if (i[feature] && i[feature][entity]) {
        return i[feature][entity]
      }
    }
    return false
  }
}
