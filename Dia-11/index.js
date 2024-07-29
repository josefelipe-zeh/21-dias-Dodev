let arraymodelo = []
let arrayano = []
let arrayvalor = []
let continuar = true
let condicao = 0
let val = 0

while (continuar){
    let modelo = prompt('Cadastre um novo modelo veiculo: ')
    arraymodelo[condicao] = modelo
    let ano = prompt('Ano: ')
    arrayano[condicao] = ano
    let valor = Number(prompt('Valor: '))
    arrayvalor[condicao] = valor
    condicao++

    let cont = prompt('Deseja cadastrar mais um veiculo? (sim/nao) ')
    if (cont !== 'sim'){
        continuar = false
    }
}

console.log('Todos os veiculos cadastrados: ')
for (let i = 0; i < arraymodelo.length; i++){
    console.log('Modelo: '+arraymodelo[i]+' | Ano: '+arrayano[i]+' | valor:'+arrayvalor[i])
}

for (let i = 0; i < arrayvalor.length -1; i++){
    for (let j = 0; j < arrayvalor.length - i - 1; j++){
        if (arrayvalor[j] > arrayvalor[j + 1]){

            let modelomaiorvalor = arraymodelo[j]
            arraymodelo[j] = arraymodelo[j + 1]
            arraymodelo[j + 1] = modelomaiorvalor

            let anomaiorvalor = arrayano[j]
            arrayano[j] = arrayano[j + 1]
            arrayano[j + 1] = anomaiorvalor

            let maiorvalor = arrayvalor[j]
            arrayvalor[j] = arrayvalor[j + 1]
            arrayvalor[j + 1] = maiorvalor
        }
    }
}

console.log('Veiculos ordenados pelo menor valor: ')
for (let i = 0; i < arraymodelo.length; i++){
    console.log('Modelo: '+arraymodelo[i]+' | Ano: '+arrayano[i]+' | valor:'+arrayvalor[i])
}