import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

// NgEngine Module
import { NgEngineModule } from 'ng-engine'
// Environment shim from CLI
import { environment } from '../../../environments/environment'
// App Config from NgEngine
import * as appConfig from '../../../appConfig'

// 404 Component
import { FourZeroFourComponent } from './404.component'

describe('FourZeroFourComponent', () => {
  let component: FourZeroFourComponent
  let fixture: ComponentFixture<FourZeroFourComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgEngineModule.forRoot({
          environment: environment,
          appConfig: appConfig
        })
      ],
      declarations: [
        FourZeroFourComponent
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FourZeroFourComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
