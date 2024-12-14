import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deposit',
  imports: [FormsModule,CommonModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {

  accountId!: number;
  amount!: number;
  message: string | null = null;

  constructor(private accountService: AccountService) {}

  depositMoney() {
    this.accountService.deposit(this.accountId, this.amount).subscribe(
       (data) => (this.message = data),
       (error) => alert(`Error while processing this request!`)
    );
  }
}
