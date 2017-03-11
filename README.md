# ng-intercom

[![NPM version][npm-image]][npm-url]

This is an Intercom wrapper for Angular 2+ with dependency injection for universal applications.

It supports all intercom methods.

## Installation

This package is on NPM, so just run
 ```sh
$ npm install ng-intercom --save
 ```

## Configuration

```ts
// Add the module

import { IntercomModule } from 'ng-intercom';

import { AppComponent } from './app';

@NgModule({
  imports: [
    IntercomModule.forRoot()
  ]
})
export class AppModule{}

```

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

## Development
To compile, just run `npm run build`. It will compile into the dist directory. 


## Distribution
When publishing to NPM, make sure to `npm run build` first, and ignore src. Then type `cd dist` and `npm publish`.

[npm-image]: https://img.shields.io/npm/v/ng-intercom.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ng-intercom