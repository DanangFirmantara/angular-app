import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementDotComponent } from './movement-dot.component';

describe('MovementDotComponent', () => {
  let component: MovementDotComponent;
  let fixture: ComponentFixture<MovementDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementDotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovementDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
