import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceModalPaymentComponent } from './service-modal-payment.component';

describe('ServiceModalPaymentComponent', () => {
  let component: ServiceModalPaymentComponent;
  let fixture: ComponentFixture<ServiceModalPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceModalPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceModalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
