import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillDotsComponent } from './fill-dots.component';

describe('FillDotsComponent', () => {
  let component: FillDotsComponent;
  let fixture: ComponentFixture<FillDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillDotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FillDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
