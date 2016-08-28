
export class IntercomBrowser {
  init() {
    (<any> window).Intercom("boot", data);
  }
  boot(data) {
    (<any> window).Intercom("boot", data);
  }
  update (data) {
    (<any> window).Intercom("update", data);
  }
  shutdown () {
    (<any> window).Intercom("shutdown");
  }
}
