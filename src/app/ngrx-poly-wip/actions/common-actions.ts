import { List } from '../../ngrx-poly/types/list'
import { createPolyAction } from './action-creator'
import { Op } from './operations'

export function levelOneCommonActions<T>(featureName: string, entityName: string) {
  return {
    findAll: createPolyAction<any>(featureName, entityName, Op.FIND_ALL),
    findAllSuccess: createPolyAction<List<T>>(featureName, entityName, Op.FIND_ALL_SUCCESS),
    findAllFailure: createPolyAction<any>(featureName, entityName, Op.FIND_ALL_FAILURE),
    search: createPolyAction<any>(featureName, entityName, Op.SEARCH),
    searchSuccess: createPolyAction<List<T>>(featureName, entityName, Op.SEARCH_SUCCESS),
    searchFailure: createPolyAction<any>(featureName, entityName, Op.SEARCH_FAILURE),
    findOne: createPolyAction<string | number>(featureName, entityName, Op.FIND_ONE),
    findOneSuccess: createPolyAction<T>(featureName, entityName, Op.FIND_ONE_SUCCESS),
    findOneFailure: createPolyAction<any>(featureName, entityName, Op.FIND_ONE_FAILURE),
    create: createPolyAction<T>(featureName, entityName, Op.CREATE),
    createSuccess: createPolyAction<T>(featureName, entityName, Op.CREATE_SUCCESS),
    createFailure: createPolyAction<any>(featureName, entityName, Op.CREATE_FAILURE),
    update: createPolyAction<T>(featureName, entityName, Op.UPDATE),
    updateSuccess: createPolyAction<T>(featureName, entityName, Op.UPDATE_SUCCESS),
    updateFailure: createPolyAction<any>(featureName, entityName, Op.UPDATE_FAILURE),
    delete: createPolyAction<string | number>(featureName, entityName, Op.DELETE),
    deleteSuccess: createPolyAction<T>(featureName, entityName, Op.DELETE_SUCCESS),
    deleteFailure: createPolyAction<any>(featureName, entityName, Op.DELETE_FAILURE),

    select: createPolyAction<string | number>(featureName, entityName, Op.SELECT),
    deselect: createPolyAction<any>(featureName, entityName, Op.DESELECT),
  }
}
