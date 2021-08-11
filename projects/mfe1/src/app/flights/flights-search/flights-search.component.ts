import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Authenticate } from 'auth-lib';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
})
export class FlightsSearchComponent {
  constructor(private store: Store) {
    this.store.dispatch(
      new Authenticate({
        email: 'teste',
        id: '1',
        name: 'Teste',
        token: '1234token',
      })
    );
  }
}
