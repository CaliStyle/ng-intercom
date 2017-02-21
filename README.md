# ng-intercom

This is an Intercom wrapper for Angular ^2 with dependency injection for universal applications.

It supports all intercom methods.

## Configuration

```ts
// Bootstrap

import { BROWSER_INTERCOM_PROVIDERS } from './ng-intercom/ng-intercom';

import { AppComponent } from './app';

bootstrap(AppComponent, [
  ...BROWSER_INTERCOM_PROVIDERS
])
.catch(err => console.error(err));

```

```ts
// App
...
import { Intercom } from './ng-intercom/ng-intercom';

@Component({
  selector: 'app',
  template: `...`
})
export class AppComponent implements OnInit {
  constructor(
    private intercom: Intercom
  ){}

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
