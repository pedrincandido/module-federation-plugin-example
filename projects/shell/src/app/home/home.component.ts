import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Authenticate, AuthState } from 'auth-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  authentication: Authenticate;

  constructor(private store: Store) {}

  showStoreValues(): void {
    this.authentication = this.store.selectSnapshot(AuthState);
    console.log(this.authentication);
  }
}
