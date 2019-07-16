import { PolyConfig, LevelOneDataServiceBase } from '../../ngrx-poly'
import { InjectionToken, Injectable } from '@angular/core'

@Injectable()
class Test extends LevelOneDataServiceBase<any> {}

export const ngrxPolyConfig: PolyConfig = {
  dataServices: { three: Test },
}
