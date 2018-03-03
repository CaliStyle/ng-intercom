import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

// NgEngine Module
import { NgEngineModule, NgEngineService } from 'ng-engine'
// Environment shim from CLI
import { environment } from '../../../environments/environment'
// App Config from NgEngine
import * as appConfig from '../../../appConfig'
// 500 Component
import { FiveZeroZeroComponent } from './500.component'

describe('FiveZeroZeroComponent', () => {
  let component: FiveZeroZeroComponent
  let fixture: ComponentFixture<FiveZeroZeroComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:  [
        RouterTestingModule,
        NgEngineModule.forRoot({
          environment: environment,
          appConfig: appConfig
        })
      ],
      declarations: [ FiveZeroZeroComponent ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveZeroZeroComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
