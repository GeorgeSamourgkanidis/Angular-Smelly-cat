import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadquartersDetailsComponent } from './headquarters-details.component';

describe('HeadquartersDetailsComponent', () => {
  let component: HeadquartersDetailsComponent;
  let fixture: ComponentFixture<HeadquartersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadquartersDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadquartersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
