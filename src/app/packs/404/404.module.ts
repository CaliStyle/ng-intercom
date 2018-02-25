import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { FourZeroFourComponent } from './404.component'
import { fourZeroFourRouter } from './404.router'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    fourZeroFourRouter
  ],
  declarations: [
    FourZeroFourComponent
  ],
  entryComponents: [
    FourZeroFourComponent
  ]
})
export class FourZeroFourModule { }
