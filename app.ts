// app.ts
import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { SpecialAccount } from "./class/SpecialAccount"

const peopleAccount = new PeopleAccount(123456, 'João', 1)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
peopleAccount.getBalance()

console.log('------------------')

const companyAccount = new CompanyAccount('Empresa ABC', 2)
companyAccount.deposit(200)
companyAccount.getLoan(500)
companyAccount.withdraw(300)
companyAccount.getBalance()

console.log('------------------')

const specialAccount = new SpecialAccount('VIP Cliente', 3)
specialAccount.deposit(100)
specialAccount.withdraw(50)
specialAccount.getBalance()
