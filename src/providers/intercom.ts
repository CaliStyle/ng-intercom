import { IntercomBrowser } from './intercom.browser';
import { Injectable } from '@angular/core';

// Abstract Class to Catch implementations
// export class IntercomEnvironment {
//   init(data: object): any {
//     throw new Error('Error init IntercomEnvironment')
//   }
//   boot(data: object): any {
//     throw new Error('Error boot IntercomEnvironment')
//   }
//   update(data: object): any {
//     throw new Error('Error update IntercomEnvironment')
//   }
//   trackEvent(eventName: string, data: any) {
//     throw new Error('Error trackEvent IntercomEnvironment')
//   }
//   show() {
//     throw new Error('Error show IntercomEnvironment')
//   }
//   shutdown() {
//     throw new Error('Error shutdown IntercomEnvironment')
//   }
// }
// Intercom -> IntercomEnvironment
@Injectable()
export class Intercom {
  constructor() { }

  /**
   * @description Method used to instantiate Intercom
   * @param {object} [intercomData] 
   * @memberof Intercom
   * 
   * @deprecated
   */
  init(intercomData?: object) {
    console.warn('Intercom.init is deprecated and will be removed in a future release. Please use Intercom.boot.');
    return (<any>window).Intercom("boot", intercomData);
  }

  /**
   * @description 
   * If you'd like to control when Intercom is loaded, you can use the 'boot' method. This is useful in situations like a one-page Javascript based application where the user may not be logged in when the page loads. You call this method with the standard intercomSettings object.
   * @param {object} [intercomData] Your intercom configuration
   * @memberof Intercom
   */
  boot(intercomData?: object) {
    return (<any>window).Intercom("boot", intercomData);
  }

  /**
   * @description 
   * If you have the Respond product (combined with another product like Engage) you should call the Intercom shutdown method to clear your users’ conversations anytime they logout of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device or computer will keep these conversations in the Messenger for one week. This method will effectively clear out any user data that you have been passing through the JS API.
   * @memberof Intercom
   */
  shutdown() {
    return (<any>window).Intercom("shutdown");
  }

  /**
   * @description 
   * Calling the update method without any other arguments will trigger the JavaScript to look for new messages that should be displayed to the current user (the one whose details are in the window.intercomSettings variable) and show them if they exist.
   * 
   * Calling the update method with a JSON object of user details will update those fields on the current user in addition to logging an impression at the current URL and looking for new messages for the user.
   * @param {object} [data] 
   * @memberof Intercom
   */
  update(data?: object) {
    if (data) {
      return (<any>window).Intercom("update", data);
    } else {
      return (<any>window).Intercom("update");
    }
  }

  /**
   * @description 
   * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
   * @memberof Intercom
   */
  hide() {
    return (<any>window).Intercom('hide');
  }

  /**
   * @description 
   * This will show the Messenger. If there are no conversations it will open with the new message view, if there are it will open with the message list.
   * 
   * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
   * 
   * @param {string} [message] 
   * @memberof Intercom
   */
  show(message?: string) {
    if (message) {
      return (<any>window).Intercom('show');
    } else {
      return this.showNewMessage(message);
    }
  }

  /**
   * @description To open the message window with the message list you can call `showMessages()`.
   * @memberof Intercom
   */
  showMessages() {
    return (<any>window).Intercom('showMessages');
  }

  /**
   * @description To open the message window with the new message view you can call showNewMessage().
   * 
   * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
   * @param {string} message 
   * @memberof Intercom
   */
  showNewMessage(message: string) {
    if (message) {
      return (<any>window).Intercom('showNewMessage');
    } else {
      return (<any>window).Intercom('showNewMessage', message);
    }
  }

  /**
   * @description 
   * You can submit an event using the trackEvent method. This will associate the event with the currently logged in user and send it to Intercom. The final parameter is a map that can be used to send optional metadata about the event.
   * 
   * You can also add custom information to events in the form of event metadata.
   * @param {string} eventName 
   * @param {*} [metadata] 
   * @memberof Intercom
   */
  trackEvent(eventName: string, metadata?: any) {
    if (metadata) {
      return (<any>window).Intercom('trackEvent', eventName, metadata);
    } else {
      return (<any>window).Intercom('trackEvent', eventName);
    }
  }

  /**
   * @description 
   * A visitor is someone who goes to your site but does not use the messenger. You can track these visitors via the visitor user_id. This user_id can be used to retrieve the visitor or lead through the REST API.
   * @returns {string} 
   * @memberof Intercom
   */
  getVisitorId(): string {
    return (<any>window).Intercom('getVisitorId');
  }

  /**
   * @description Alias for getVisitorId()
   * @alias getVisitorId()
   * @readonly
   * @type {string}
   * @memberof Intercom
   */
  get visitorId(): string {
    return (<any>window).Intercom('getVisitorId');
  }

  /**
   * @description 
   * Gives you the ability to hook into the show event. Requires a function argument.
   * @param {() => void} handler 
   * @memberof Intercom
   */
  onShow(handler: () => void) {
    return (<any>window).Intercom('onShow', handler);
  }

  /**
   * @description 
   * Gives you the ability to hook into the hide event. Requires a function argument.
   * 
   * @param {() => void} handler 
   * @memberof Intercom
   */
  onHide(handler: () => void) {
    return (<any>window).Intercom('onHide', handler);
  }

  /**
   * @description 
   * This method allows you to register a function that will be called when the current number of unread messages changes.
   * @param {(unreadCount?: number) => void} handler 
   * @memberof Intercom
   */
  onUnreadCountChange(handler: (unreadCount?: number) => void) {
    return (<any>window).Intercom('onHide', handler);
  }
}
