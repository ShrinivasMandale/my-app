import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUser2Component } from './create-user2.component';

describe('CreateUser2Component', () => {
  let component: CreateUser2Component;
  let fixture: ComponentFixture<CreateUser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUser2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
