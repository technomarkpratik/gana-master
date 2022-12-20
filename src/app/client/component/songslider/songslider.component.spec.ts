import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsliderComponent } from './songslider.component';

describe('SongsliderComponent', () => {
  let component: SongsliderComponent;
  let fixture: ComponentFixture<SongsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
