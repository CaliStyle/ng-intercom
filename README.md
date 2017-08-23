This is fork of the angular2-intercom to support multiple "PROJECTS"

# Angular Intercom for website where multiple intercom apps might be used.

[![npm](https://img.shields.io/npm/v/ng-intercom.svg)](https://www.npmjs.com/package/ng-intercom-multi) [![npm](https://img.shields.io/npm/dm/ng-intercom-multi.svg)](https://www.npmjs.com/ng-intercom-multi) [![Maintenance](https://img.shields.io/maintenance/yes/2017.svg)]()

This is an Intercom wrapper for Angular 2+ with dependency injection for universal applications.

It supports all documented intercom methods.

### BETA VERSION

`master` is now hosting the 1.0.2 beta version of `ng-intercom-multi`. If you need to make changes to the latest stable version, please PR against `0.x.x`.

If you find issues with this version, please file an issue as soon as possible so we can take a look at it. We appreciate your cooperation!

### Installation

This package is on NPM, so just run
 ```sh
$ npm install ng-intercom-multi --save
 ```

### Configuration

1. Import `IntercomModule` to `app.module.ts`.
We don't load any "intercom" javascript at this point. We loaded within your app once you know the
"app id".

```ts
import { IntercomModule } from 'ng-intercom';

@NgModule({
  imports: [
    ...
    IntercomModule.forRoot()
    ...
  ]
})
export class AppModule { }
```

2. Use in your components/directives/whatever you want!

```ts
// App
import { Component, OnInit } from '@angular/core';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'app',
  template: `...`
})
export class AppComponent implements OnInit {
  constructor(
    public intercom: Intercom
  ){}

  initIntercom() {
    this.intercom.boot({
      app_id: <app_id>,
    }, {
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
Made by Scott Wyatt and [Wilson Hobbs](https://www.twitter.com/wbhob) in 2017.
