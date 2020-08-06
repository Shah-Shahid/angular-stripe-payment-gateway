import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayServerComponent } from './pay-server.component';

describe('PayServerComponent', () => {
  let component: PayServerComponent;
  let fixture: ComponentFixture<PayServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
