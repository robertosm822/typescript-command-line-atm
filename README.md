# Desenvolvendo o Dio Bank

- Projeto de desafio da DIO - Formação TypeScript Developer Full Stack

#### Projeto desenvolvido com conceitos básicos de typescript

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm run dev

#### Desafios
[x] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[x] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo

[x] Criar um novo tipo de conta a partir da DioAccount
  - Esta conta não deve receber novos atributos
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

[x] Todos os atributos de qualquer conta devem ser privados

[x] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[x] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

## Resultado na linha de comando

```bash

Você depositou R$ 100. Saldo atual: R$ 100
Você sacou R$ 50. Saldo atual: R$ 50
------------------
Você depositou R$ 200. Saldo atual: R$ 200
Você depositou R$ 500. Saldo atual: R$ 700
Empréstimo de R$ 500 realizado com sucesso!
Você sacou R$ 300. Saldo atual: R$ 400
------------------
Você depositou R$ 110. Saldo atual: R$ 110
Depósito com bônus de R$ 10 aplicado.
Você sacou R$ 50. Saldo atual: R$ 60

```