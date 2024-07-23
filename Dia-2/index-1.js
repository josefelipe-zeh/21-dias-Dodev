let nome 
let idade
let cnh = false
let carro = false

nome = prompt('Qual seu nome?')
idade = parseInt(prompt('Quantos anos você tem?'))
let opcaocnh = prompt('Você tem cnh? (s/n)')
let opcaocarro = prompt('Você tem carro? (s/n)') 
if (opcaocnh == 's'){
    cnh = true;
}
if (opcaocarro == 's'){
    carro = true
} 

if (idade < 18 || !cnh){
    console.log('Você '+ nome +' não pode dirigir.');
}else if (idade >= 18 && cnh == true && !carro){
    console.log('Você '+ nome +' pode dirigir, mas infelizmente não possui carro.');
}else{
    console.log('Você '+ nome +' pode dirigir!!!');
}