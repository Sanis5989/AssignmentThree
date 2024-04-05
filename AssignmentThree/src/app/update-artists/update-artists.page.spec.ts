import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateArtistsPage } from './update-artists.page';

describe('UpdateArtistsPage', () => {
  let component: UpdateArtistsPage;
  let fixture: ComponentFixture<UpdateArtistsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
