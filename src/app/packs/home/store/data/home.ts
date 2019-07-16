import { HttpClient } from '@angular/common/http'
import { LevelOneDataServiceBase } from '../../../../ngrx-poly'
import { Todo } from '../../models/Todo'

export class HomeDataService extends LevelOneDataServiceBase<Todo> {
  constructor(private httpClient: HttpClient) {
    super()
  }

  findOne(query: any) {
    return this.httpClient.get<Todo>('https://jsonplaceholder.typicode.com/todos/1')
  }
}
