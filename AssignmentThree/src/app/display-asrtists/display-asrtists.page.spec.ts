import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayAsrtistsPage } from './display-asrtists.page';

describe('DisplayAsrtistsPage', () => {
  let component: DisplayAsrtistsPage;
  let fixture: ComponentFixture<DisplayAsrtistsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAsrtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
