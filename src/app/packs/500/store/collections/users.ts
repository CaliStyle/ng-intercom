import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { LevelOneCollectionServiceBase, NgrxPolyHelperService } from '../../../../ngrx-poly-wip'
import { User } from '../../models/User'

@Injectable()
export class UsersCollectionService extends LevelOneCollectionServiceBase<User> {
  constructor(helperService: NgrxPolyHelperService, store: Store<any>) {
    super('users', helperService, store)
  }
}
