let num = Number(prompt('Digite o número que desejar: '))

for (let cont=1; cont<=3; cont++){
    console.log('Tabuada de '+(num+cont));
    for (let contar = 0; contar<=10; contar++){
        console.log((num+cont)+ ' x '+contar+' = '+((num+cont)*contar))
    }
}