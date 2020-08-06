import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { NgxStripeModule } from 'ngx-stripe';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PayComponent } from './pay/pay.component';
import { PayCustomComponent } from './pay-custom/pay-custom.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { HttpClientModule } from '@angular/common/http'

import {} from '@angular/material/form-field';
import {} from '@angular/material/input';
import { PayServerComponent } from './pay-server/pay-server.component';


@NgModule({
  declarations: [
    AppComponent,
    PayComponent,
    PayCustomComponent,
    SuccessComponent,
    FailureComponent,
    PayServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgxStripeModule.forRoot('pk_test_51HA6MSIcQpp4qx68HV3npmVT1LBtZ7lYtKbglhGHXhQFHBTVWwAyczOWxkvTM6uHCMIrbow5menbW8Hm7BWvw9gx00o7LbeaH4'),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
