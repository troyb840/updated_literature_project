import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCiteComponent } from './create-cite.component';

describe('CreateCiteComponent', () => {
  let component: CreateCiteComponent;
  let fixture: ComponentFixture<CreateCiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCiteComponent]
    });
    fixture = TestBed.createComponent(CreateCiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
