import { Observable } from 'rxjs'
import { List } from '../types/list'

export abstract class DepthTwoDataServiceBase<T, U> {
  abstract findAll(parent: T, query: any): Observable<List<U>>
  abstract search(parent: T, query: any): Observable<List<U>>
  abstract findOne(parent: T, id: string | number): Observable<U>
  abstract create(parent: T, obj: U): Observable<U>
  abstract update(parent: T, obj: U): Observable<U>
  abstract delete(parent: T, id: string | number): Observable<U>
}
