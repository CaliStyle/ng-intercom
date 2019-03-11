import { BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

// Environment shim from CLI
import { environment } from '../../environments/environment'
// Routing Module
import { AppRoutingModule } from './app.routing.module'
// Root Component
import { AppComponent } from './app.component'
// Shared Module
import { SharedModule } from '../shared/shared.module'
// For Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Service Worker
import { ServiceWorkerModule } from '@angular/service-worker'

// Intercom
import { IntercomModule } from '../ng-intercom/intercom.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'proxy-engine-ng'
    }),
    HttpClientModule,
    BrowserTransferStateModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    IntercomModule.forRoot({
      appId: 'klwzj86j',
      updateOnRouterChange: true,
      alignment: 'left'
    }),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
