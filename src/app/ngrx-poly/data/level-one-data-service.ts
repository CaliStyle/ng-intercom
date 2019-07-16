import { Injectable } from '@angular/core'
import { Observable, of, EMPTY } from 'rxjs'
import { List } from '../types/list'

export abstract class LevelOneDataServiceBase<Entity, ListOfEntities = List<Entity>> {
  findAll(query: any): Observable<ListOfEntities> {
    return EMPTY
  }
  search(query: any): Observable<ListOfEntities> {
    return EMPTY
  }
  findOne(id: string | number): Observable<Entity> {
    return EMPTY
  }
  create(obj: Entity): Observable<Entity> {
    return EMPTY
  }
  update(obj: Entity): Observable<Entity> {
    return EMPTY
  }
  delete(id: string): Observable<Entity> {
    return EMPTY
  }
}
