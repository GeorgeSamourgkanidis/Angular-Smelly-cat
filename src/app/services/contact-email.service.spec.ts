import { TestBed } from '@angular/core/testing';

import { ContactEmailService } from './contact-email.service';

describe('EmailServiceService', () => {
  let service: ContactEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
