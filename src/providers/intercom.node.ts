
export class IntercomNode {
  init(data: object) {
    throw new Error('Error init IntercomNode')
  }
  boot(data: object) {
    throw new Error('Error boot IntercomNode')
  }
  update(data: object) {
    throw new Error('Error update IntercomNode')
  }  
  trackEvent(eventName: string, data: object) {
    throw new Error('Error trackEvent IntercomNode')
  }
  shutdown() {
    throw new Error('Error shutdown IntercomNode')
  }
}