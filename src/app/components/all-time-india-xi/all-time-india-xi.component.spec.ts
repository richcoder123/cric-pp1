import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeIndiaXiComponent } from './all-time-india-xi.component';

describe('AllTimeIndiaXiComponent', () => {
  let component: AllTimeIndiaXiComponent;
  let fixture: ComponentFixture<AllTimeIndiaXiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTimeIndiaXiComponent]
    });
    fixture = TestBed.createComponent(AllTimeIndiaXiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
