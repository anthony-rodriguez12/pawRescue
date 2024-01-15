import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApadrinamientoListComponent } from './apadrinamiento-list.component';

describe('ApadrinamientoListComponent', () => {
  let component: ApadrinamientoListComponent;
  let fixture: ComponentFixture<ApadrinamientoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApadrinamientoListComponent]
    });
    fixture = TestBed.createComponent(ApadrinamientoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
