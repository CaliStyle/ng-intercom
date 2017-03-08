import { NgModule, ModuleWithProviders } from '@angular/core';
import { IntercomModuleInitial } from './module';

const MODULES = [IntercomModuleInitial]

@NgModule({
    imports: [IntercomModuleInitial.forRoot()],
    exports: MODULES
})
export class IntercomRootModule { }

@NgModule({
    imports: MODULES,
    exports: MODULES,
    id: 'ng-intercom'
})
export class IntercomModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: IntercomRootModule };
    }
}

export { Intercom } from './intercom';