import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { NgrxPolyModule } from '../../ngrx-poly-wip'
import { SharedModule } from '../../shared/shared.module'
import { FiveZeroZeroComponent } from './500.component'
import { fiveZeroZeroRouter } from './500.router'
import { fiveohohPolyConfig } from './store/config'
import { reducers } from './store/reducers'
import { UsersCollectionService } from './store/collections/users'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    fiveZeroZeroRouter,
    StoreModule.forFeature('500', reducers),
    NgrxPolyModule.forFeature('500', fiveohohPolyConfig),
  ],
  providers: [UsersCollectionService],
  declarations: [FiveZeroZeroComponent],
  entryComponents: [FiveZeroZeroComponent],
})
export class FiveZeroZeroModule {}
