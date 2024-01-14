import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicButtonsComponent } from './magic-buttons.component';

describe('MagicButtonsComponent', () => {
  let component: MagicButtonsComponent;
  let fixture: ComponentFixture<MagicButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
