import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay-custom',
  templateUrl: './pay-custom.component.html',
  styleUrls: ['./pay-custom.component.scss']
})
export class PayCustomComponent implements OnInit {
  customStripeForm: FormGroup;
  submitted: boolean;
  formProcess: boolean;
  message: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customStripeForm = this.fb.group({
      cardNumber: ['', Validators.required],
      expMonth: ['', Validators.required],
      expYear: ['', Validators.required],
      cvv: ['', Validators.required],
      name: ['', Validators.required],
    })
    this.loadStripe();
  }

  loadStripe() {
   
    if(!window.document.getElementById('stripe-custom-form-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-custom-form-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        //window['Stripe'].setPublishableKey('pk_test_51HA6MSIcQpp4qx68HV3npmVT1LBtZ7lYtKbglhGHXhQFHBTVWwAyczOWxkvTM6uHCMIrbow5menbW8Hm7BWvw9gx00o7LbeaH4');
      }
       
      window.document.body.appendChild(s);
    }
  }

  pay(form) {

    if(!window['Stripe']) {
      alert('Oops! Stripe did not initialize properly.');
      return;
    }
     
    this.submitted = true;

    //console.log(this.customStripeForm);
    if (this.customStripeForm.invalid) {      
      return;
    }   
   
    this.formProcess = true;console.log(this.formProcess)
    console.log("form before *** ");
    console.log(form);
    if(!window['Stripe']) {
      alert('Oops! Stripe did not initialize properly.');
      return;
    }
    (<any>window).Stripe.card.createToken({
      number: form.cardNumber,
      exp_month: form.expMonth,
      exp_year: form.expYear,
      cvc: form.cvc,
      name: form.name,
      //sub_total: 10 * 100,
    }, (status: number, response: any) => {
      this.submitted = false;
      this.formProcess = false; console.log(this.formProcess)
      if (status === 200) {
        this.message = `Success! Card token ${response.card.id}.`;
        console.log(response.card);
      } else {
        this.message = response.error.message;
        console.log(response.error.message);
      }
    });
  }

}
