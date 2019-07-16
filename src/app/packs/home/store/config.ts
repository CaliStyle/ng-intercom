import { PolyConfig, createReducerFactory } from '../../../ngrx-poly'
import { HomeDataService } from './data/home'

export const homePolyConfig: PolyConfig = {
  dataServices: {
    home: HomeDataService,
  },
}

export const createHomReducer = createReducerFactory('home')
