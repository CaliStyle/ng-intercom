# ng-intercom

[![npm](https://img.shields.io/npm/v/ng-intercom.svg)](https://www.npmjs.com/package/ng-intercom)
[![npm](https://img.shields.io/npm/dm/ng-intercom.svg)](https://www.npmjs.com/ng-intercom)
[![Build status][ci-image]][ci-url]
[![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)]()

This is an Intercom wrapper for Angular 2+ which supports AoT and SSR.

It intends to supports all documented intercom methods and PRs for functionality is greatly appreciated.

### BETA VERSION

`master` is now hosting the 7.0.0 beta version of `ng-intercom`. If you need to make changes to the latest stable version, please PR against `0.x.x`. If you need to use the last 0.x version, please run `npm install --save --save-exact ng-intercom@0.2`.

If you find issues with this version, please file an issue as soon as possible so we can take a look at it. We appreciate your cooperation!

### ALPHA VERSION
If you want to try the latest features, check out the 7.0.0-alpha branch! Features include automatic script loading and intercom directives! If you find an issue, please report it!

### Installation

This package is on NPM, so just run
 ```sh
$ npm install ng-intercom@latest --save
 ```

### Configuration

1. Import `IntercomModule` to `app.module.ts`. The module will automatically include the APP_ID instantiation, so you DO NOT need to copy the install script from Intercom and place it in your `index.html`.

```ts
import { IntercomModule } from 'ng-intercom';

@NgModule({
  imports: [
    ...
    IntercomModule.forRoot({
      appId: <your_app_id>, // from your Intercom config
      updateOnRouterChange: true // will automatically run `update` on router event changes. Default: `false`
    })
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

  ngOnInit() {
    this.intercom.boot({
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
To run live testing: `ng test`

To run tests: `npm test`

To run distribution: `npm run build:dist`

To publish `npm run build:dist && npm publish dist`


### Credits
Maintained by [Scott Wyatt](https://github.com/scott-wyatt) and [Wilson Hobbs](https://www.twitter.com/wbhob) in 2017 with contributions from [Florian Reifschneider](https://github.com/flore2003), [Devon Sams](https://www.twitter.com/POS1TRON), [Humberto Rocha](https://github.com/humrochagf), and [Luca GOUTY](http://luca.gouty.fr)


[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/ng-intercom/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/ng-intercom/tree/master
