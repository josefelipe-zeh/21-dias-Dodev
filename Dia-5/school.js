let maior = 0
let media = 0
let sexo
let quantosM = 0
let acima = 0
let contador = 1

while (contador <= 5){
    sexo = Number(prompt('Qual o sexo do aluno(a)?(1.Masculino/2.Feminino)'))
    let nota = Number(prompt('Qual a nota do aluno?'))
    if (sexo === 1){
        if (maior < nota){
            maior = nota
        }
        quantosM++
    }else if(sexo === 2 && nota > 7){
        acima++
    }

    media += nota
    contador++
}
media = media/contador

console.log('Cadastros realizados com sucesso.')
console.log('Aqui estão os resultados')
console.log('A média geral dos alunos: '+ media)
console.log('Foram '+ quantosM +' homens que enviaram suas notas.')
console.log('Foram '+ acima +' mulheres que tiveram nota acima da média.')
console.log('A maior nota entre os homens é de '+ maior +' pontos')

