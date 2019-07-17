import { HttpClient } from '@angular/common/http'
import { DepthOneDataServiceBase } from '../../../../ngrx-poly'
import { Todo } from '../../models/Todo'
import { map } from 'rxjs/operators'
import { EMPTY } from 'rxjs'

export class HomeDataService extends DepthOneDataServiceBase<Todo> {
  constructor(private httpClient: HttpClient) {
    super()
  }

  findOne(query: any) {
    return this.httpClient.get<Todo>('https://jsonplaceholder.typicode.com/todos/1')
  }

  findAll(query) {
    return this.httpClient
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map(todos => ({ rows: todos, pagination: {} as any })))
  }

  /**
   * don't need these methods for now
   */
  create() {
    return EMPTY
  }
  delete() {
    return EMPTY
  }
  search() {
    return EMPTY
  }
  update() {
    return EMPTY
  }
}
