import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionFormComponent } from './adopcion-form.component';

describe('AdopcionFormComponent', () => {
  let component: AdopcionFormComponent;
  let fixture: ComponentFixture<AdopcionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopcionFormComponent]
    });
    fixture = TestBed.createComponent(AdopcionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
