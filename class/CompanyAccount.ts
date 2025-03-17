import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this['validateStatus']()){
      // Como balance é private, usamos getBalance + deposit
      this.deposit(value)
      console.log(`Empréstimo de R$ ${value} realizado com sucesso!`)
    }
  }
}
