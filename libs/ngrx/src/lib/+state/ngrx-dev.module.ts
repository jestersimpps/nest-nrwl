import { NgModule, Optional, SkipSelf } from '@angular/core';
import { META_REDUCERS, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { NgRxState } from './ngrx.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export function getMetaReducers(): MetaReducer<NgRxState>[] {
  return [storeFreeze];
}

@NgModule({
  imports: [StoreDevtoolsModule.instrument({ maxAge: 50 })],
  providers: [
    {
      provide: META_REDUCERS,
      deps: [],
      useFactory: getMetaReducers
    }
  ]
})
export class ClientNgRxDevModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ClientNgRxDevModule
  ) {
    if (parentModule) {
      throw new Error('Module is already loaded. Import it only one time');
    }
  }
}
