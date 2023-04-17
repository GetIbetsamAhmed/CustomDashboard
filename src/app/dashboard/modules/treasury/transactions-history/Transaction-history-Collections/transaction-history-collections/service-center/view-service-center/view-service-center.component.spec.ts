import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceCenterComponent } from './view-service-center.component';

describe('ViewServiceCenterComponent', () => {
  let component: ViewServiceCenterComponent;
  let fixture: ComponentFixture<ViewServiceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewServiceCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
