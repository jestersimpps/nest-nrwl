import { Action, Store } from '@ngrx/store';

export abstract class ClientNgRxService<S, A extends Action> {
  store: Store<S>;

  dispatchAction(action: A) {
    this.store.dispatch(action);
  }
}
