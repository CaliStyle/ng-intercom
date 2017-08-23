# Installation

Installing ng-intercom is easy. Make sure you have your App ID nearby for this process.

First, install ng-intercom from NPM.

```sh
npm install --save ng-intercom@beta
```

Then, in your root `app.module.ts`, include `IntercomModule`.

```ts
import { IntercomModule } from 'ng-intercom';

@NgModule({
  imports: [
    ...
    IntercomModule.forRoot(YOUR_APP_ID)
    ...
  ]
})
export class AppModule{}
```

If you have child modules or lazy loaded modules and you want to use the directives, import `IntercomModule`,
but don't call `forRoot()` on it.

```ts
import { IntercomModule } from 'ng-intercom';


@NgModule({
  imports: [
    ...
    IntercomModule
    ...
  ]
})
export class ChildModule{}
```

Now, you can use the [providers](2-Providers.md) and [directives](3-Directives.md) wherever you like!
