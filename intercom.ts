import { Injectable } from '@angular/core';

// Abstract Class to Catch implementations
export class IntercomEnviroment {
  init(data: Object): any {
    throw new Error('Error init IntercomEnviroment')
  }
  boot(data: Object): any {
    throw new Error('Error boot IntercomEnviroment')
  }
  update(data: Object): any {
    throw new Error('Error update IntercomEnviroment')
  }
  shutdown() {
    throw new Error('Error shutdown IntercomEnviroment')
  }
}
// Intercom -> IntercomEnviroment
@Injectable()
export class Intercom {
  constructor(public intercom: IntercomEnviroment){}

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