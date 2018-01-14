# Providers

The `Intercom` provider has all the available Intercom.JS methods available in the documentation. For a detailed overview of what each method does, see the [API Documentation](4-API.md).

```ts
import { Intercom } from 'ng-intercom';

@Component()
export class AppComponent {
    constructor (
        public intercom:Intercom
    ) {
        this.intercom.boot(myIntercomConfig)
    }
}
```

You can inject the Intercom provider into any of your components, directives, services, etc. However, make sure you have called `boot()` before calling any methods. Typically, putting this in your `app.component.ts` will prevent conflicts.