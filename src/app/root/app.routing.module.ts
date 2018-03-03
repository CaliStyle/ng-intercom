import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

// TODO load this with NgEngine
import { routes } from '../../appConfig'

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
