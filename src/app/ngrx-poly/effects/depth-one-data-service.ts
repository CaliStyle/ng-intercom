import { Observable } from 'rxjs'
import { List } from '../types/list'

export abstract class DepthOneDataServiceBase<T> {
  abstract findAll(query: any): Observable<List<T>>
  abstract search(query: any): Observable<List<T>>
  abstract findOne(id: string | number): Observable<T>
  abstract create(obj: T): Observable<T>
  abstract update(obj: T): Observable<T>
  abstract delete(id: string | number): Observable<T>
}
