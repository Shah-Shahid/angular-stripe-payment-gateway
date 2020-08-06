import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pay-server',
  templateUrl: './pay-server.component.html',
  styleUrls: ['./pay-server.component.scss']
})
export class PayServerComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };
 
  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };
 
  stripeTest: FormGroup;
 
  constructor(private fb: FormBuilder, private stripeService: StripeService, private http: HttpClient) {}
 
  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }
 
  createToken(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
          this.http.post("http://localhost:3000/payme",{
          token : result.token.id
          }).subscribe(
          (res)=>{
            console.log("The response from server is ",res);
            console.log('Payment Done');
          })
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

}
