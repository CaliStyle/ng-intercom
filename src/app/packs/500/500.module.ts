import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { FiveZeroZeroComponent } from './500.component'
import { fiveZeroZeroRouter } from './500.router'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    fiveZeroZeroRouter
  ],
  declarations: [
    FiveZeroZeroComponent
  ],
  entryComponents: [
    FiveZeroZeroComponent
  ]
})
export class FiveZeroZeroModule { }
