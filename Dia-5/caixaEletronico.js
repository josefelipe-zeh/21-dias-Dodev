let cpf;
let condicao = 1;
let nome;
let opcao;
let maior = 0;
let total;
let i = 0;
let valor = 0;
let saque;
let deposito = 1200;

nome = prompt('Qual seu nome?');
cpf = Number(prompt('Digite seu cpf:'));
console.log('Nome: ' + nome);
console.log('CPF: ' + cpf);
while (condicao === 1) {
    opcao = Number(prompt('Deseja (1) sacar ou (2) depositar?'));
    valor = Number(prompt('Qual o valor para a realização da transação?'));

    if (opcao === 1) {
        saque = deposito - valor;
        if (saque < 0) {
            console.log('Esse valor é negativo ou excede o valor que está na conta.');
        } else {
            deposito = saque;
            console.log('Transação de saque realizada com sucesso.');
        }
    } else if (opcao === 2) {
        deposito += valor;
        console.log('Transação de depósito realizada com sucesso.');
    } else {
        console.log('Opção inválida. Por favor, selecione 1 para sacar ou 2 para depositar.');
    }
    
    if (valor > maior){
        maior = valor
    }
    total += valor
    i =+ 1

    console.log('Seu saldo é de: ' + deposito);

    condicao = Number(prompt('Deseja (1) continuar ou (2) parar?'));
    condicao !==1
}

let media = total/i
console.log('O maior valor inserido: '+ maior)
console.log('A media dos valores inseridos: '+ media)
console.log('Transações finalizadas.');