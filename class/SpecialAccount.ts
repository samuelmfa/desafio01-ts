import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number, balance: number, status: boolean) {
    super(name, accountNumber, balance, status);
  }

  // Método de depósito que acresce 10 ao valor informado
  deposit(amount: number): void {
    const bonus = 10;
    const totalAmount = amount + bonus;
    super.deposit(totalAmount);
    console.log(`Depósito de R$${amount} realizado com sucesso. Bônus de R$${bonus} adicionado. Saldo atual: R$${this.getBalance()}`);
  }
}