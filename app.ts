import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { SpecialAccount } from './class/SpecialAccount';

// Instância de PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(123456, 'Nath', 1, 10, true);
console.log(peopleAccount);
peopleAccount.deposit(50);
peopleAccount.withdraw(20);
peopleAccount.getBalance();

// Instância de CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20, 100, true);
console.log(companyAccount);
companyAccount.deposit(200);
companyAccount.withdraw(50);
companyAccount.getLoan(500);
companyAccount.getBalance();

// Instância de SpecialAccount
const specialAccount: SpecialAccount = new SpecialAccount('Special', 30, 200, true);
console.log(specialAccount);
specialAccount.deposit(100);
specialAccount.withdraw(50);
specialAccount.getBalance();