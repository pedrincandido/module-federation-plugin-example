import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { AuthLibModule, AuthState } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { FLIGHTS_ROUTES } from './flights.routes';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    NgxsModule.forFeature([AuthState]),
    RouterModule.forChild(FLIGHTS_ROUTES),
  ],
  declarations: [FlightsSearchComponent],
})
export class FlightsModule {}
