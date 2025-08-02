import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../auth';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  name = '';
  email = '';
  message = '';
  status = '';

  constructor(private auth: Auth) {}

  sendMessage() {
    if (!this.name || !this.email || !this.message) {
      this.status = 'Please fill in all fields.';
      return;
    }

    this.status = 'Sending...';

    const contactData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.auth.sendContactMessage(contactData).subscribe({
      next: () => {
        this.status = 'Message sent! ✅';
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: () => {
        this.status = 'Failed to send message. Please try again. ❌';
      }
    });
  }
}
