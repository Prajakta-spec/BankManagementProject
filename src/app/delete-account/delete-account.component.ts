import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-delete-account',
  imports: [FormsModule, CommonModule],
  templateUrl: './delete-account.component.html',
  styleUrl: './delete-account.component.css'
})
export class DeleteAccountComponent {

  constructor(private accountService : AccountService) {}

  accountId!: number;
  message: string | null = null;

  deleteAccount () {
    this.accountService.deleteAccount(this.accountId).subscribe({
      next:(data) =>(this.message = data),
      error:(err) => alert('Error deleting the account'+ err.error),
    })
  }
}
