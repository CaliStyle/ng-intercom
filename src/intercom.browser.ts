declare var window: any;
export class IntercomBrowser {
  init(data: object) {
    (<any>window).Intercom("boot", data);
  }
  boot(data: object) {
    (<any>window).Intercom("boot", data);
  }
  update(data: object) {
    (<any>window).Intercom("update", data);
  }
  trackEvent(eventName: string, data: any) {
    (<any>window).Intercom('trackEvent', eventName, data);
  }
  shutdown() {
    (<any>window).Intercom("shutdown");
  }
}
