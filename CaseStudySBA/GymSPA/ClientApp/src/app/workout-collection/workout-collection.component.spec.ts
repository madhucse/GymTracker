import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCollectionComponent } from './workout-collection.component';

describe('WorkoutCollectionComponent', () => {
  let component: WorkoutCollectionComponent;
  let fixture: ComponentFixture<WorkoutCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
