let condicao
do{
    let nome = prompt('Digite seu nome: ')
    let idade = Number(prompt('Digite sua idade: '))
    let salario = Number(prompt('Informe seu salario: '))

    console.log('Nome: '+nome)
    console.log('Idade: '+idade+' anos')
    console.log('Salário: '+salario+' reais')

    condicao = prompt('Verifique se as informacões estão corretas:'+
    '(sim)estão corretas, (nao)estão corretas')

    let ano = 2024
    let porcentagem = 0.015
    let contador = 0
    console.log('Seus aumentos de salarios para os próximos 10 anos: ')
    while (contador < 10){
        salario += salario*porcentagem
        porcentagem *= 2
        ano++
        console.log('Ano: '+ano+', salário: '+salario+' reais.')
        contador++
    }

}while (condicao === 'nao')