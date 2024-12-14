import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  email!: string;
  accountHolder!: string;
  message: string | null = null;

  constructor(private accountService: AccountService) { }

  createAccount() {

    const newAccount = {
      accountHolder: this.accountHolder,
      email: this.email
    };

    this.accountService.createAccount(newAccount).subscribe({
      next: (data) => {
        console.log('Success Response:', data); // Log the success response
        this.message = data;
    },
    error: (err) => {
        console.error('Error Response:', err); // Log the error response
        alert('Error creating the account. Please try again.');
    },

    });
  }
}
