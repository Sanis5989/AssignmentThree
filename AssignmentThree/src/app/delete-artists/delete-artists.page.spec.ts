import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteArtistsPage } from './delete-artists.page';

describe('DeleteArtistsPage', () => {
  let component: DeleteArtistsPage;
  let fixture: ComponentFixture<DeleteArtistsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteArtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
