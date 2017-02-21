import { Injectable } from '@angular/core';

// Abstract Class to Catch implementations
export class IntercomEnvironment {
  init(data: Object): any {
    throw new Error('Error init IntercomEnvironment')
  }
  boot(data: Object): any {
    throw new Error('Error boot IntercomEnvironment')
  }
  update(data: Object): any {
    throw new Error('Error update IntercomEnvironment')
  }
  shutdown() {
    throw new Error('Error shutdown IntercomEnvironment')
  }
}
// Intercom -> IntercomEnvironment
@Injectable()
export class Intercom {
  constructor(public intercom: IntercomEnvironment){}

  init(data){
    return this.intercom.init(data);
  }
  boot(data) {
    return this.intercom.boot(data);
  }
  update (data) {
    return this.intercom.update(data);
  }
  shutdown () {
    return this.intercom.shutdown();
  }
}
