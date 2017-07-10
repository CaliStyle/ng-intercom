# Angular Intercom

[![NPM version][npm-image]][npm-url]

This is an Intercom wrapper for Angular 2+ with dependency injection for universal applications.

It supports all intercom methods.

### Installation

This package is on NPM, so just run
 ```sh
$ npm install ng-intercom --save
 ```

### Configuration

1. Add the Intercom install script to src/index.html (Intercom provides this in their setup instructions). 

```html
<script>
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;
    s.src='https://widget.intercom.io/widget/<app_id>';
    var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
</script>
```

2. Import `IntercomModule` to `app.module.ts`.

```ts

import { IntercomModule } from 'ng-intercom';

import { AppComponent } from './app';

@NgModule({
  imports: [
    IntercomModule.forRoot()
  ]
})
export class AppModule{}

```

3. Use in your components/directives/whatever you want!

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


### Distribution
When publishing to NPM, make sure to `npm run build` first, and ignore src. Then type `cd dist` and `npm publish`.


### Credits
Made by Scott Wyatt and [Wilson Hobbs](https://www.twitter.com/wbhob) in 2017.

[npm-image]: https://img.shields.io/npm/v/ng-intercom.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ng-intercom
