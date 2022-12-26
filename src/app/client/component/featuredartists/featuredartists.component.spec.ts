import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedartistsComponent } from './featuredartists.component';

describe('FeaturedartistsComponent', () => {
  let component: FeaturedartistsComponent;
  let fixture: ComponentFixture<FeaturedartistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedartistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedartistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
