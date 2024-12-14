import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-list',
  imports: [CurrencyPipe,CommonModule],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent implements OnInit {

  accounts: any [] =  [];

  ngOnInit(): void {
    this.loadAccount();
  }

  constructor(private accountService : AccountService) {}

  loadAccount() {
    this.accountService.getAllAccounts().subscribe({
      next: (data) => (this.accounts =data),
      error: (err) => alert('Error loading accounts: '+err.error),
    });
  }

  deleteAccount(accountId:number) {

    if(confirm('Are you sure you want to delete this account?')) {
      this.accountService.deleteAccount(accountId).subscribe({

        next :() => {
          alert('Account deleted Successfully');
          this.loadAccount();
          //this.accounts =this.accounts.filter((account) =>account.accountId! == accountId);
          
        },
        error:(err) => alert('Error deleting account: '+ err.error),
      });
    }
  }
}
