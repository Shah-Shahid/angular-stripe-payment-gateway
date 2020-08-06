import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  paymentForm: FormGroup;

  constructor(private fb:FormBuilder, private http: HttpClient) { }

  handler:any = null;

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      amount: ['', Validators.required],
      fullAmount: ['2000', Validators.required]
    })
    this.loadStripe();
  }
  onPay() {
    console.log(this.paymentForm.get('amount').value);
    this.pay(this.paymentForm.get('amount').value);
  }

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HA6MSIcQpp4qx68HV3npmVT1LBtZ7lYtKbglhGHXhQFHBTVWwAyczOWxkvTM6uHCMIrbow5menbW8Hm7BWvw9gx00o7LbeaH4',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }

  pay(amount) {   
      var handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51HA6MSIcQpp4qx68HV3npmVT1LBtZ7lYtKbglhGHXhQFHBTVWwAyczOWxkvTM6uHCMIrbow5menbW8Hm7BWvw9gx00o7LbeaH4',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          alert('Token Created!!');
        }
      });
  
      handler.open({
        name: 'ASTE Payment Gateway',
        description: 'Please Enter your credentials',
        amount: amount * 100
      });
  
  }
}
