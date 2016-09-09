# Angular2 Intercom

This is an Intercom wrapper for Angular2 that also works with angular-universal
It supports all intercom methods.

## Configuration

```ts
// Bootstrap

import { BROWSER_INTERCOM_PROVIDERS } from './browser';

import { AppComponent } from './app';

bootstrap(AppComponent, [
  ...BROWSER_INTERCOM_PROVIDERS
])
.catch(err => console.error(err));

```

```ts
// App
...
import { Intercom } from './intercom';

@Component({
  selector: 'app',
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
