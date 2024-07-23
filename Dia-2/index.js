const temFome = prompt('Você está com fome? (sim/não)')
const temDinheiro = prompt('Você tem dinheiro? (sim/não)')
const estaAberto = prompt('O restaurante está aberto? (sim/não)')

if(temFome === "não" || temDinheiro === "não"){
    console.log('Coma algo em casa.');
}else if (temFome === "sim" && temDinheiro === "sim" && estaAberto === "não"){
    console.log('É melhor pedir um delivery)');
}else{
    console.log('Hoje vamos comer fora :)');
}