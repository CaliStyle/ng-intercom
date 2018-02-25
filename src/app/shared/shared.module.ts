import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Material
import {
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatCheckboxModule,
  MatListModule
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule
  ],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule
  ],
  declarations: []
})
export class SharedModule { }
