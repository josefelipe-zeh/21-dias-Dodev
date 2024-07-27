//Declaração de variaveis
let nome, idade, peso, altura, profissao, imc, ano, idadeatual;
let cont

do{
    //Inserindo informações dos usuarios
    nome = prompt("Digite seu nome: ")
    idade = Number(prompt('Digite sua idade: '))
    peso = Number(prompt('Digite seu peso: '))
    altura = Number(prompt('Digite sua altura: '))
    profissao = prompt('Qual é sua profissão? ')

    console.log('Olá '+nome+', você tem '+idade+' anos, é '+profissao+', tem '+altura+'m de altura e pesa '+peso+'kg')
    console.log('....................')

    //calculo de IMC
    imc = peso/(altura*altura)
    if (imc <= 18.5){
        console.log('Seu IMC é de '+imc+'kg/m2 indicando que você está em Magreza.')
    }else if (imc > 18.5 && imc <= 24.9){
        console.log('Seu IMC é de '+imc+'kg/m2 indicando que você está em peso Normal.')
    }else if (imc > 24.9 && imc >= 30){
        console.log('Seu IMC é de '+imc+'kg/m2 indicando que você está em Sobrepeso.')
    }else{
        console.log('Seu IMC é de '+imc+'kg/m2 indicando que você está em Obesidade.')
    }
    console.log('....................')

    //Se é maior de idade ou não
    if (idade >= 18){
        console.log('Você pode tomar uma gelada. ')
    }else{
        console.log('Você terá que ficar só no suco. ')
    }
    console.log('....................')

    //Qual ano o usario nasceu
    let anoatual = 2024
    ano = anoatual-idade
    console.log('Você nasceu no ano de '+ano)
    console.log('....................')

    //Cada ano em que viveu e a idade que teve em cada um
    anovivido = ano
    idadeatual = 1
    for (let anovivido = ano; anovivido <= anoatual; anovivido++){
        console.log('Em '+anovivido+' tinha '+idadeatual+' anos')
        idadeatual++
    }

  cont = prompt('Deseja continuar inserindo informações? (sim/nao)')
} while (cont === 'sim')
