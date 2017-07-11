# Directives

Angular Intercom is proud to offer some directives to assist with development, and reduce the amount of code you actually have to write.

### [intercomHide](../src/directives/hide.directive.ts)
Hides the open intercom messenger window.

```html
<!-- Preferred -->
<button intercomHide></button>
<!-- OR --> 
<button [intercomHide]="true"></button>
```


### [intercomShowMessages](../src/directives/show-messages.directive.ts)
Shows the messenger window with a list of the user's messages.

```html
<!-- Preferred -->
<button intercomShowMessages></button> 
<!-- OR --> 
<button [intercomShowMessages]="true"></button>
```


### [intercomShowNewMessage](../src/directives/show-new-message.directive.ts)
Open up a new message window.
*Optional:* preconceived message

```html
<!-- Preferred -->
<button intercomShowNewMessage></button> 
<button [intercomShowNewMessage]="yourMessage"></button>
<!-- OR --> 
<button intercomShowNewMessage [message]="yourMessage"></button>
<button intercomShowNewMessage message="Your message in normal old string format..."></button>
```


### [intercomShow](../src/directives/show.directive.ts)
Open up a intercom window.
*Optional:* preconceived message. If a message is defined, it serves as an alias for `showNewMessage`.

```html
<!-- Preferred -->
<button intercomShow></button> 
<button [intercomShow]="yourMessage"></button>
```


### [intercomShutdown](../src/directives/shutdown.directive.ts)
End an Intercom session. Great for logout buttons.
*Optional:* preconceived message

```html
<!-- Preferred -->
<button intercomShutdown></button> 
<button [intercomShutdown]="true"></button>
```


### [intercomTrackEvent](../src/directives/track-event.directive.ts)
Track an event.
*Optional:* event metadata

```html
<!-- Preferred -->
<button intercomTrackEvent="buttonClick" [metadata]="yourData"></button> 
<!--OR-->
<button intercomTrackEvent event="buttonClick" [metadata]="yourData"></button> 
<button intercomTrackEvent [event]="eventNameVariable" [metadata]="yourData"></button> 
```