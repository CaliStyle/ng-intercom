import { Injectable } from '@angular/core'
import { LevelOneDataServiceBase } from '../../../../ngrx-poly-wip'
import { User } from '../../models/User'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable()
export class UsersDataService extends LevelOneDataServiceBase<User> {
  constructor(private httpClient: HttpClient) {
    super()
  }

  findAll(query: any) {
    return this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users', { params: query })
      .pipe(map(users => ({ rows: users, pagination: {} as any })))
  }
}
