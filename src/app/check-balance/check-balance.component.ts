import { Component,} from '@angular/core';
import { AccountService } from '../account.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-balance',
  imports: [FormsModule,CurrencyPipe, CommonModule],
  templateUrl: './check-balance.component.html',
  styleUrl: './check-balance.component.css'
})
export class CheckBalanceComponent {

  accountId! : number;
  balance: number | null = null;

  constructor(private accountService: AccountService) {}

  checkBalance() {
    this.accountService.getBalance(this.accountId).subscribe(
      (data) => (this.balance = data),
      (error) => alert('Account Not Found')
    );

  }
}
