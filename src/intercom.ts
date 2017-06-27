import { Injectable } from '@angular/core';

// Abstract Class to Catch implementations
export class IntercomEnvironment {
  init(data: object): any {
    throw new Error('Error init IntercomEnvironment')
  }
  boot(data: object): any {
    throw new Error('Error boot IntercomEnvironment')
  }
  update(data: object): any {
    throw new Error('Error update IntercomEnvironment')
  }
  trackEvent(eventName: string, data: any) {
    throw new Error('Error trackEvent IntercomEnvironment')
  }
  show() {
    throw new Error('Error show IntercomEnvironment')
  }
  shutdown() {
    throw new Error('Error shutdown IntercomEnvironment')
  }
}
// Intercom -> IntercomEnvironment
@Injectable()
export class Intercom {
  constructor(public intercom: IntercomEnvironment) { }

  public init(data: object) {
    return this.intercom.init(data);
  }
  public boot(data: object) {
    return this.intercom.boot(data);
  }
  public update(data: object) {
    return this.intercom.update(data);
  }
  public trackEvent(eventName: string, data: any) {
    return this.intercom.trackEvent(eventName, data);
  }
  public show() {
    return this.intercom.show();
  }
  public shutdown() {
    return this.intercom.shutdown();
  }
}
