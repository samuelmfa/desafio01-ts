export class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number;
  private status: boolean;

  constructor(name: string, accountNumber: number, balance: number, status: boolean) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.status = status;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Depósito de R$${amount} realizado com sucesso. Saldo atual: R$${this.balance}`);
    } else {
      console.log('O valor do depósito deve ser positivo.');
    }
  }

  withdraw(amount: number): void {
    if (this.status && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Saque de R$${amount} realizado com sucesso. Saldo atual: R$${this.balance}`);
    } else if (!this.status) {
      console.log("A conta não está ativa.");
    } else {
      console.log("Saldo insuficiente para realizar o saque.");
    }
  }

  getBalance(): void {
    console.log(this.balance);
  }

  getStatus(): boolean {
    return this.status;
  }

  private validateStatus(): boolean {
    if (this.getStatus()) { 
      return this.status;
    }

    throw new Error("Conta inválida");
  }
}
