import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegristerComponent } from './regrister.component';

describe('RegristerComponent', () => {
  let component: RegristerComponent;
  let fixture: ComponentFixture<RegristerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegristerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegristerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
