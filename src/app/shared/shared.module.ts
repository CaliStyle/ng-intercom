import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

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
