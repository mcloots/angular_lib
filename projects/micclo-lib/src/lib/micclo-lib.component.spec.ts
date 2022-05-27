import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiccloLibComponent } from './micclo-lib.component';

describe('MiccloLibComponent', () => {
  let component: MiccloLibComponent;
  let fixture: ComponentFixture<MiccloLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiccloLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiccloLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
