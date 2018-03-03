import { IntercomModule } from './intercom.module'

describe('IntercomModule', () => {
  let intercomModule: IntercomModule

  beforeEach(() => {
    intercomModule = new IntercomModule()
  })

  it('should create an instance', () => {
    expect(intercomModule).toBeTruthy()
  })
})
