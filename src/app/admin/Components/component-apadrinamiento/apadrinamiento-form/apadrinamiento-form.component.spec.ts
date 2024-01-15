import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApadrinamientoFormComponent } from './apadrinamiento-form.component';

describe('ApadrinamientoFormComponent', () => {
  let component: ApadrinamientoFormComponent;
  let fixture: ComponentFixture<ApadrinamientoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApadrinamientoFormComponent]
    });
    fixture = TestBed.createComponent(ApadrinamientoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
