// Why? CoreModule provides one or more singleton services. Angular registers the providers with the app root injector,
// making a singleton instance of each service available to any component that needs them, whether that component is
// eagerly or lazily loaded. CoreModule will contain singleton services. When a lazy loaded module imports these, it
// will get a new instance and not the intended app-wide singleton.

import { throwIfAlreadyLoaded } from './module-import-guard';
import { NgModule, Optional, SkipSelf } from '@angular/core';

// import 'hammerjs';
// import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PageNotFoundPage } from '../app/page-not-found.page';
import { NavigationComponent } from './navigation/navigation.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  imports: [
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  exports: [
    SharedModule,
    NavigationComponent,
    SideNavComponent
  ],
  declarations: [
    PageNotFoundPage,
    NavigationComponent,
    SideNavComponent
  ],
  providers: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
