import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser'
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
import { NgrxPolyModule } from '../ngrx-poly-wip'
import { ngrxPolyConfig } from './store/config'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'proxy-engine-ng',
    }),
    HttpClientModule,
    BrowserTransferStateModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
