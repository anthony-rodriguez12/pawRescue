import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAddComponent } from './pet-add.component';

describe('PetAddComponent', () => {
  let component: PetAddComponent;
  let fixture: ComponentFixture<PetAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetAddComponent]
    });
    fixture = TestBed.createComponent(PetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
