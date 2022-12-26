import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandingsongsComponent } from './trandingsongs.component';

describe('TrandingsongsComponent', () => {
  let component: TrandingsongsComponent;
  let fixture: ComponentFixture<TrandingsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrandingsongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrandingsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
