import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailDtoComponent } from './car-detail-dto.component';

describe('CarDetailDtoComponent', () => {
  let component: CarDetailDtoComponent;
  let fixture: ComponentFixture<CarDetailDtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarDetailDtoComponent]
    });
    fixture = TestBed.createComponent(CarDetailDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
