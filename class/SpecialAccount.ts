// /class/SpecialAccount.ts
import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit(value: number): void {
    if(this['validateStatus']()){
      const bonus = 10
      super.deposit(value + bonus)
      console.log(`Depósito com bônus de R$ ${bonus} aplicado.`)
    }
  }
}
