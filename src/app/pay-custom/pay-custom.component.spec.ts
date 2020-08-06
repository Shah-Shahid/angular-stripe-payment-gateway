import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCustomComponent } from './pay-custom.component';

describe('PayCustomComponent', () => {
  let component: PayCustomComponent;
  let fixture: ComponentFixture<PayCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
