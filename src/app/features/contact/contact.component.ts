import { Component, OnInit } from '@angular/core';
import { InputWithLabelComponent } from '../../components/input-with-label/input-with-label.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactEmailService } from '../../services/contact-email.service';
import { ContactEmailData } from '../../models/contactEmailData';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InputWithLabelComponent, CommonModule, MatCheckboxModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    postalCode: new FormControl(0, [Validators.required]),
    address: new FormControl('', [Validators.required]),
    message: new FormControl(''),
    agreement: new FormControl(false, [Validators.required])
  });

  constructor(private contactEmailService: ContactEmailService) {}

  // ngOnInit() {
  //   this.contactForm.markAsUntouched()
  // }

  submitClicked() {
    console.log(this.contactForm.getRawValue());
    if(this.contactForm.valid) {
      const data = this.contactForm.getRawValue() as ContactEmailData
      this.contactEmailService.sendContactFormEmail(data)
    }
  }
}
