import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8080/api/accounts'

  constructor(private http : HttpClient) { }

  getAllAccounts() : Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  getBalance(accountId : number) : Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/${accountId}/balance`);
  }

  withdraw(accountId: number, amount: number): Observable<string> {
   return this.http.post<string>(`${this.baseUrl}/${accountId}/withdraw`,amount, { responseType: 'text' as 'json' });
  }

  deposit(accountId: number, amount: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/${accountId}/deposit`,amount, { responseType: 'text' as 'json' });
   }

   createAccount(newAccount: {accountHolder: string, email: string }): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/create`, newAccount,{ responseType: 'text' as 'json' });
  }

  deleteAccount(accountId: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${accountId}/delete`, { responseType: 'text' as 'json' });
  }
}
