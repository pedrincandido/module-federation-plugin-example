import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { Authenticate } from '../action/add-auth.action';
import { Authentication } from '../interfaces/authentication.interface';

const AUTH_STATE_TOKEN = new StateToken<Authenticate>('authenticate');

@State<Authentication>({
  name: AUTH_STATE_TOKEN,
  defaults: undefined,
})
@Injectable()
export class AuthState {
  @Action(Authenticate)
  authenticate(
    { setState, patchState }: StateContext<Partial<Authentication>>,
    action: Authenticate
  ): void {
    if (Object.keys(action.payload)?.length) {
      setState(action.payload);
    } else {
      patchState(action.payload);
    }
  }
}
