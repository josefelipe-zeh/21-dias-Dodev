let primeiroN = Number(prompt('Digite o primeiro número que desejar:'))
let segundoN = Number(prompt('Digite o segundo numero que desejar:'))
let calculo = Number(prompt('Agora digite a opção da operação que deseja realizar: N1 = +; N2 = -; N3 = *; N4 = /'))

switch (calculo){
    case 1:
        console.log(primeiroN +'+'+ segundoN +'= '+(primeiroN+segundoN))
        break;
    case 2:
        console.log(primeiroN +'-'+ segundoN +'= '+(primeiroN-segundoN))
        break;
    case 3:
        console.log(primeiroN +'x'+ segundoN +'= '+(primeiroN*segundoN))
        break;
    case 4:
        console.log(primeiroN +'/'+ segundoN +'= '+(primeiroN/segundoN))
        break;
    default:
        console.log('Opção inválida.')
        break;
}