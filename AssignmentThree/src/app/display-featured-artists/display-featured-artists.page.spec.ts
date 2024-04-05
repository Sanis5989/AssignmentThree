import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayFeaturedArtistsPage } from './display-featured-artists.page';

describe('DisplayFeaturedArtistsPage', () => {
  let component: DisplayFeaturedArtistsPage;
  let fixture: ComponentFixture<DisplayFeaturedArtistsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFeaturedArtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
