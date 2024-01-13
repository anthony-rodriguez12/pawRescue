import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionAddComponent } from './adopcion-add.component';

describe('AdopcionAddComponent', () => {
  let component: AdopcionAddComponent;
  let fixture: ComponentFixture<AdopcionAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopcionAddComponent]
    });
    fixture = TestBed.createComponent(AdopcionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
