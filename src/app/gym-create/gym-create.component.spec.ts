import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymCreateComponent } from './gym-create.component';

describe('GymCreateComponent', () => {
  let component: GymCreateComponent;
  let fixture: ComponentFixture<GymCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
