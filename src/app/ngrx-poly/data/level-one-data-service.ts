import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { List } from '../types/list'

@Injectable()
export abstract class LevelOneDataServiceBase<Entity, ListOfEntities = List<Entity>> {
  abstract findAll(query: any): Observable<ListOfEntities>
  abstract search(query: any): Observable<ListOfEntities>
  abstract findOne(id: string | number): Observable<Entity>
  abstract create(obj: Entity): Observable<Entity>
  abstract update(obj: Entity): Observable<Entity>
  abstract delete(id: string): Observable<Entity>
}
