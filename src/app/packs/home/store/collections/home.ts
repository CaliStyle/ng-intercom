import { Store } from '@ngrx/store'
import { LevelOneCollectionServiceBase, NgrxPolyHelperService } from '../../../../ngrx-poly'
import { Todo } from '../../models/Todo'

export class HomeCollectionService extends LevelOneCollectionServiceBase<Todo> {
  constructor(helperService: NgrxPolyHelperService, store: Store<any>) {
    super('home', helperService, store)
  }
}
