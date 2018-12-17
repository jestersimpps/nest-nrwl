import {NgModule, Optional, SkipSelf} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {ngRxReducers} from './ngrx.reducer';

// import AppStoreModule in the AppModule after router module
@NgModule({
  imports: [
    StoreModule.forRoot(ngRxReducers, {}),
    StoreRouterConnectingModule
  ],
})
export class ClientNgRxModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ClientNgRxModule
  ) {
    if (parentModule) {
      throw new Error('Module is already loaded. Import it only one time');
    }
  }
}
