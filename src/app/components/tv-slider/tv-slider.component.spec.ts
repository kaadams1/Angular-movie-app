import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSliderComponent } from './tv-slider.component';

describe('TvSliderComponent', () => {
  let component: TvSliderComponent;
  let fixture: ComponentFixture<TvSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
