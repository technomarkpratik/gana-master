import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebannerComponent } from './homebanner.component';

describe('HomebannerComponent', () => {
  let component: HomebannerComponent;
  let fixture: ComponentFixture<HomebannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomebannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
