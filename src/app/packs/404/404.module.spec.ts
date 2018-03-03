import { FourZeroFourModule } from './404.module'

describe('404Module', () => {
  let fourZeroFourModule: FourZeroFourModule

  beforeEach(() => {
    fourZeroFourModule = new FourZeroFourModule()
  })

  it('should create an instance', () => {
    expect(fourZeroFourModule).toBeTruthy()
  })
})
