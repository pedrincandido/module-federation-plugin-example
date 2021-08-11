import { Authentication } from '../interfaces/authentication.interface';

export class Authenticate {
  static readonly type = '[Auth] Add';
  constructor(public payload: Authentication) {}
}
