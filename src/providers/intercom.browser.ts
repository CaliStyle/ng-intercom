declare var window: any;
export class IntercomBrowser {
  init(intercomData?: object) {
    console.warn('Intercom.init is deprecated and will be removed in a future release. Please use Intercom.boot.');
    (<any>window).Intercom("boot", intercomData);
  }

  boot(intercomData?: object) {
    (<any>window).Intercom("boot", intercomData);
  }

  shutdown() {
    (<any>window).Intercom("shutdown");
  }

  update(data?: object) {
    if (data) {
      (<any>window).Intercom("update", data);
    } else {
      (<any>window).Intercom("update");
    }
  }

  hide() {
    (<any>window).Intercom('hide');
  }

  show() {
    (<any>window).Intercom('show');
  }

  showMessages() {
    (<any>window).Intercom('showMessages');
  }

  showNewMessage(message: string) {
    if (message) {
      (<any>window).Intercom('showNewMessage');
    } else {
      (<any>window).Intercom('showNewMessage', message);
    }
  }

  trackEvent(eventName: string, metadata?: any) {
    if (metadata) {
      (<any>window).Intercom('trackEvent', eventName, metadata);
    } else {
      (<any>window).Intercom('trackEvent', eventName);
    }
  }

  getVisitorId(): string {
    return (<any>window).Intercom('getVisitorId');
  }

  onShow(handler: () => void) {
    (<any>window).Intercom('onShow', handler);
  }

  onHide(handler: () => void) {
    (<any>window).Intercom('onHide', handler);
  }

  onUnreadCountChange(handler: (unreadCount?: number) => void) {
    (<any>window).Intercom('onHide', handler);
  }
}
