import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-withdraw',
  imports: [FormsModule, CommonModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {

  constructor(private accountService : AccountService) {}

  accountId!: number;
  amount!: number;
  message: string | null = null;

  withdrawMoney() {

    this.accountService.withdraw(this.accountId, this.amount).subscribe(
      (data) => (this.message = data),
      (error) => alert('Error processing the request!')
    );
  }
}
