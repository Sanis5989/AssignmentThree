import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistDetailsComponentPage } from './artist-details-component.page';

describe('ArtistDetailsComponentPage', () => {
  let component: ArtistDetailsComponentPage;
  let fixture: ComponentFixture<ArtistDetailsComponentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailsComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
