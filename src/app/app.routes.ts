import { Routes } from '@angular/router';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { AccountListComponent } from './account-list/account-list.component';

export const routes: Routes = [
  { 
    path: 'check-balance', 
    component: CheckBalanceComponent 
  },
  { 
    path: 'deposit', 
    component: DepositComponent
  },
  { 
    path: 'withdraw', 
    component : WithdrawComponent 
  },
  { path: 'create-account', 
    component: CreateAccountComponent 
  },
  { path: 'delete-account', 
    component: DeleteAccountComponent
  },
  { path: 'account-list', 
    component: AccountListComponent
  },
  { path: '**', 
    redirectTo: '/account-list', 
    pathMatch: 'full' 
  },
  
];
