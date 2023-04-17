import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartPaymentModalComponent } from './spare-part-payment-modal.component';

describe('SparePartPaymentModalComponent', () => {
  let component: SparePartPaymentModalComponent;
  let fixture: ComponentFixture<SparePartPaymentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparePartPaymentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparePartPaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
