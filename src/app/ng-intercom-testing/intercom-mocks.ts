import { Inject, Injectable, PLATFORM_ID, Optional, RendererFactory2 } from '@angular/core'
import { Router } from '@angular/router'
import { isPlatformBrowser } from '@angular/common'

import { IntercomConfig } from '../ng-intercom/shared/intercom-config'
import { Any, BootInput } from '../ng-intercom/types/boot-input'
import { Intercom } from '../ng-intercom/intercom/intercom'

/**
 * A provider with every Intercom.JS method
 */
@Injectable()
export class IntercomMocks extends Intercom {

    constructor(
        @Inject(IntercomConfig) config: IntercomConfig,
        @Inject(PLATFORM_ID) platformId: Object,
        @Optional() @Inject(Router) router: Router
    ) {
        super(config, platformId, router, null, null)
        if (!isPlatformBrowser(this.platformId)) {
            return
        }

        // Run load and attacht to window
        this.loadIntercom(config)

        // Subscribe to router changes
        if (config && config.updateOnRouterChange) {
            router.events.subscribe(event => {
                this.update()
            })
        }
    }

    /**
     * If you'd like to control when Intercom is loaded, you can use the 'boot' method.
     * This is useful in situations like a one-page Javascript based application where the user may not be logged in
     * when the page loads. You call this method with the standard intercomSettings object.
     */
    public boot(intercomData?: BootInput): void {
        return
    }

    /**
     * If you have the Respond product (combined with another product like Engage)
     * you should call the Intercom shutdown method to clear your users’ conversations anytime they logout
     * of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device
     * or computer will keep these conversations in the Messenger for one week.
     * This method will effectively clear out any user data that you have been passing through the JS API.
     */
    public shutdown(): void {
        return
    }

    /**
     * Calling the update method without any other arguments will trigger the JavaScript to look for new messages
     * that should be displayed to the current user (the one whose details are in the window.intercomSettings variable)
     * and show them if they exist.
     *
     * Calling the update method with a JSON object of user details will update those fields on the current user
     * in addition to logging an impression at the current URL and looking for new messages for the user.
     */
    public update(data?: Any): void {
        return
    }

    /**
     * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
     */
    public hide(): void {
        return
    }

    /**
     * This will show the Messenger. If there are no conversations it will open with the new message view,
     * if there are it will open with the message list.
     *
     * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
     *
     */
    public show(message?: string): void {
        return
    }

    /**
     * To open the message window with the message list you can call `showMessages()`.
     */
    public showMessages(): void {
        return
    }

    /**
     * To open the message window with the new message view you can call showNewMessage().
     *
     * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
     */
    public showNewMessage(message?: string): void {
        return
    }

    /**
     * You can submit an event using the trackEvent method.
     * This will associate the event with the currently logged in user and send it to Intercom.
     * The final parameter is a map that can be used to send optional metadata about the event.
     *
     * You can also add custom information to events in the form of event metadata.
     */
    public trackEvent(eventName: string, metadata?: any): void {
        return
    }

    /**
     * A visitor is someone who goes to your site but does not use the messenger.
     * You can track these visitors via the visitor user_id.
     * This user_id can be used to retrieve the visitor or lead through the REST API.
     */
    public getVisitorId(): string {
        return
    }

    /**
     * Alias for getVisitorId()
     * @alias getVisitorId()
     * @readonly
     */
    get visitorId(): string {
        return
    }

    /**
     * Gives you the ability to hook into the show event. Requires a function argument.
     */
    public onShow(handler: () => void): void {
        return
    }

    /**
     * Gives you the ability to hook into the hide event. Requires a function argument.
     */
    public onHide(handler: () => void): void {
        return
    }

    /**
     * This method allows you to register a function that will be called when the current number of unread messages changes.
     */
    public onUnreadCountChange(handler: (unreadCount?: number) => void): void {
        return
    }

    l(conf: IntercomConfig): Function {

        // if (!isPlatformBrowser(this.platformId)) {
        //   return
        // }
        return function (): void {
            return;
        }
    }

    loadIntercom(config: IntercomConfig): void {
        return
    }
}
