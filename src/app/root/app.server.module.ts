import { NgModule } from '@angular/core'
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server'
import { RouterModule } from '@angular/router'
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader'

// Root Module
import { AppModule } from './app.module'
// Root Component
import { AppComponent } from './app.component'
// Route Module
import { AppRoutingModule } from './app.routing.module'
// Shared Module
import { SharedModule } from '../shared/shared.module'
// For Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgrxPolyModule } from '../ngrx-poly'
import { ngrxPolyConfig } from './store/config';



@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    RouterModule,
    AppRoutingModule,
    ModuleMapLoaderModule,
    BrowserAnimationsModule,
    SharedModule,
    NgrxPolyModule.forRoot(ngrxPolyConfig)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppServerModule {

}
