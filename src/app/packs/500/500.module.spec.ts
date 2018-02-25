import { FiveZeroZeroModule } from './500.module'

describe('FiveZeroZeroModule', () => {
  let fiveZeroZeroModule: FiveZeroZeroModule

  beforeEach(() => {
    fiveZeroZeroModule = new FiveZeroZeroModule()
  })

  it('should create an instance', () => {
    expect(fiveZeroZeroModule).toBeTruthy()
  })
})
