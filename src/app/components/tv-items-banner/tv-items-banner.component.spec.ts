import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvItemsBannerComponent } from './tv-items-banner.component';

describe('TvItemsBannerComponent', () => {
  let component: TvItemsBannerComponent;
  let fixture: ComponentFixture<TvItemsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvItemsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvItemsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
