import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { FormGroup } from '@angular/forms';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let contactForm: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Some simple tests
  it('should create a form with 7 inputs', () => {
    expect(contactForm.get('name')).toBeDefined();
    expect(contactForm.get('email')).toBeDefined();
    expect(contactForm.get('city')).toBeDefined();
    expect(contactForm.get('postalCode')).toBeDefined();
    expect(contactForm.get('address')).toBeDefined();
    expect(contactForm.get('message')).toBeDefined();
    expect(contactForm.get('agreement')).toBeDefined();
  });

  it('should validate the "name" input', () => {
    contactForm.setValue({ name: '', email: 'test@example.com' });
    expect(contactForm.invalid).toBeTruthy();
  });

  it('should validate the "email" input', () => {
    contactForm.setValue({ name: 'George Samou', email: 'invalid_email' });
    expect(contactForm.invalid).toBeTruthy();
  });
});
