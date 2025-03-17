export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }

  getBalance(): number {
    return this.balance
  }

  // Agora é um método padrão
  deposit(value: number): void {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Você depositou R$ ${value}. Saldo atual: R$ ${this.balance}`)
    }
  }

  withdraw(value: number): void {
    if(this.validateStatus() && this.balance >= value){
      this.balance -= value
      console.log(`Você sacou R$ ${value}. Saldo atual: R$ ${this.balance}`)
    } else {
      console.log('Saldo insuficiente ou conta inválida.')
    }
  }

  protected validateStatus(): boolean {
    if (this.status) {
      return true
    }
    throw new Error('Conta inválida')
  }
}
