import { Inject, Injectable } from '@angular/core'
import { PolyConfig, POLY_CONFIG } from './config'
import { POLY_FEATURE } from './feature'

@Injectable()
export class NgrxPolyHelperService {
  constructor(@Inject(POLY_FEATURE) public featureName: string, @Inject(POLY_CONFIG) public config: PolyConfig) {}
}
