# Angular2 Intercom

This is an Intercom wrapper for Angular2 that also works with angular-universal
It supports all intercom methods.

## Configuration

```js
// Bootstrap

import { BROWSER_INTERCOM_PROVIDERS } from './browser';

import { AppComponent } from './app';

bootstrap(AppComponent, [
  ...BROWSER_INTERCOM_PROVIDERS
])
.catch(err => console.error(err));

```

```js
// App
...
import { Intercom } from './intercom';

@Component({
  selector: 'app',
  providers: ...,
  directives: ...,
  template: ...
  `
})
export class AppComponent implements OnInit {
  constructor(private intercom: Intercom){ }

  ngOnInit() {
    this.intercom.init({
      app_id: <app_id>,
      // Supports all optional configuration.
      widget: {
        "activator": "#intercom" 
      }
    });
  }
}

```