import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, balance: number, status: boolean){
    super(name, accountNumber, balance, status)
  }

  getLoan = (amount: number): void => {
    if (this.getStatus()) {
      this.deposit(amount);
      console.log(`Você pegou um empréstimo de R$${amount}. Saldo atual: R$${this.getBalance()}`);
    } else {
      console.log('A conta não está ativa. Empréstimo não pode ser realizado.');
    }
  }
}
