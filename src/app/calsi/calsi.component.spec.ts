import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalsiComponent } from './calsi.component';

describe('CalsiComponent', () => {
  let component: CalsiComponent;
  let fixture: ComponentFixture<CalsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalsiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
