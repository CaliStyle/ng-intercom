# Angular Intercom

[![npm version](https://badge.fury.io/js/ng-intercom.svg)](https://badge.fury.io/js/ng-intercom)Ï

This is an Intercom wrapper for Angular 2+ with dependency injection for universal applications.

It supports all intercom methods.

### ALPHA VERSION
If you want to try the latest features, please see the `1.0.0-alpha` branch.

### Installation

This package is on NPM, so just run
 ```sh
$ npm install ng-intercom --save
 ```

### Configuration

1. Import `IntercomModule` to `app.module.ts`. The module will automatically include the APP_ID instantiation, so you DO NOT need to copy the install script from Intercom and place it in your `index.html`.

```ts
import { IntercomModule } from 'ng-intercom';

import { AppComponent } from './app';

@NgModule({
  imports: [
    IntercomModule.forRoot(YOUR_APP_ID)
  ]
})
export class AppModule{}
```

2. Use in your components/directives/whatever you want!

```ts
// App
...
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'app',
  template: `...`
})
export class AppComponent implements OnInit {
  constructor(
    public intercom: Intercom
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

### Development
To compile, just run `npm run build`. It will compile into the dist directory. 

### Credits
Made by Scott Wyatt and [Wilson Hobbs](https://www.twitter.com/wbhob) in 2017.Ï