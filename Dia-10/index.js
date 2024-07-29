let array = []
let arrayinvert = []
let num
let contador = 4
let i = 0

for (i = 0; i < 5; i++){
    num = prompt('Insira um valor: ')
    array[i] = num
}
console.log(array)

for (i = 0; i < 5; i++){
    arrayinvert[i] = array[contador]
    contador--
}
console.log(arrayinvert)