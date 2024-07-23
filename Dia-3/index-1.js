let abastecer = Number(prompt('Você deseja abastecer com: '+
    'N1 alcool; N2 gasolina ou N3 somente calibrar?'))
let valor
let total

switch (abastecer){
    case 1:
        valor = prompt('Qual o valor deseja abastecer em álcool?')
        total=valor/3
        console.log('Foram abastecidos '+total+'L de ácool.')
    break;
    case 2:
        valor = prompt('Qual o valor deseja abastecer em gasolina?')
        total=valor/5
        console.log('Foram abastecidos '+total+'L de gasolina.')
    break;
    case 3:
        console.log('O pneu foi calibrado com sucesso.')
    break;
    default:
        console.log('Não temos essa opção.')
    break;
}