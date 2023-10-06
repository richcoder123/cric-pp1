import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcXiComponent } from './wc-xi.component';

describe('WcXiComponent', () => {
  let component: WcXiComponent;
  let fixture: ComponentFixture<WcXiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WcXiComponent]
    });
    fixture = TestBed.createComponent(WcXiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
