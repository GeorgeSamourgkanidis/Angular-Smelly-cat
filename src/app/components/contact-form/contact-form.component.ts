import { Component, OnInit } from '@angular/core';
import { InputWithLabelComponent } from '../../components/input-with-label/input-with-label.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactEmailService } from '../../services/contact-email.service';
import { ContactEmailData } from '../../models/contactEmailData';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [InputWithLabelComponent, CommonModule, MatCheckboxModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', [Validators.required]),
    postalCode: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
    address: new FormControl('', [Validators.required]),
    message: new FormControl(''),
    agreement: new FormControl(false, [Validators.requiredTrue])
  });

  constructor(private contactEmailService: ContactEmailService) {}

  submitClicked() {
    this.validateAllFormFields(this.contactForm);
    if (this.contactForm.valid) {
      const data = this.contactForm.getRawValue() as ContactEmailData;
      this.contactEmailService.sendContactFormEmail(data);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}
