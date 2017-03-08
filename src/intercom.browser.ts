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
  shutdown() {
    (<any>window).Intercom("shutdown");
  }
}
