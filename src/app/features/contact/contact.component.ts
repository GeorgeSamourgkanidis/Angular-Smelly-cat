import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { HeadquartersDetailsComponent } from '../../components/headquarters-details/headquarters-details.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, HeadquartersDetailsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {}
