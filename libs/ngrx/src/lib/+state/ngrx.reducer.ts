import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import {RouterState} from "@angular/router";

export interface NgRxState {
  router: RouterReducerState<RouterState>;
}

export const ngRxReducers: ActionReducerMap<NgRxState> = {
  router: routerReducer
};
