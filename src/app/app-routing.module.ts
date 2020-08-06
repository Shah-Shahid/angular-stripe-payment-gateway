import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayComponent } from './pay/pay.component';
import { PayCustomComponent } from './pay-custom/pay-custom.component';
import { PayServerComponent } from './pay-server/pay-server.component';

const routes: Routes = [
  {path:'defaultPay', component:PayComponent},
  {path:'customPay', component:PayCustomComponent},
  {path:'serverPay', component:PayServerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
