import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApadrinamientoAddComponent } from './apadrinamiento-add.component';

describe('ApadrinamientoAddComponent', () => {
  let component: ApadrinamientoAddComponent;
  let fixture: ComponentFixture<ApadrinamientoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApadrinamientoAddComponent]
    });
    fixture = TestBed.createComponent(ApadrinamientoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
