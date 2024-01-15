import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApadrinamientoEditComponent } from './apadrinamiento-edit.component';

describe('ApadrinamientoEditComponent', () => {
  let component: ApadrinamientoEditComponent;
  let fixture: ComponentFixture<ApadrinamientoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApadrinamientoEditComponent]
    });
    fixture = TestBed.createComponent(ApadrinamientoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
