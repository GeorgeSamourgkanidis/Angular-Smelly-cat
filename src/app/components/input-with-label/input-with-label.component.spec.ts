import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithLabelComponent } from './input-with-label.component';

describe('InputWithLabelComponent', () => {
  let component: InputWithLabelComponent;
  let fixture: ComponentFixture<InputWithLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
