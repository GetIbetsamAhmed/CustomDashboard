import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectModalPaymentComponent } from './direct-modal-payment.component';

describe('DirectModalPaymentComponent', () => {
  let component: DirectModalPaymentComponent;
  let fixture: ComponentFixture<DirectModalPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectModalPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectModalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
