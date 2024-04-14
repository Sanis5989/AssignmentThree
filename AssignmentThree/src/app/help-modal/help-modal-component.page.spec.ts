import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpModalComponentPage } from './help-modal-component.page';

describe('HelpModalComponentPage', () => {
  let component: HelpModalComponentPage;
  let fixture: ComponentFixture<HelpModalComponentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpModalComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
