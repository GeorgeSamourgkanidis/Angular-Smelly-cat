import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactEmailData } from '../models/contactEmailData';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {
  async sendContactFormEmail(data: ContactEmailData) {
    const templateParams = {
      name: data.name,
      email: data.email,
      city: data.city,
      postalCode: data.postalCode,
      address: data.address,
      message: data.message
    };
    emailjs.init('Yu6aTsCCbmw_s1mKZ');
    await emailjs.send('service_sxjo4ax', 'template_ai2bzql', templateParams);
    // could have then and catch
  }
}
