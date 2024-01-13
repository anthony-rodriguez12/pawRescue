import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionEditComponent } from './adopcion-edit.component';

describe('AdopcionEditComponent', () => {
  let component: AdopcionEditComponent;
  let fixture: ComponentFixture<AdopcionEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopcionEditComponent]
    });
    fixture = TestBed.createComponent(AdopcionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
