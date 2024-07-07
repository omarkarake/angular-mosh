import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentLikeComponent } from './assignment-like.component';

describe('AssignmentLikeComponent', () => {
  let component: AssignmentLikeComponent;
  let fixture: ComponentFixture<AssignmentLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignmentLikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
