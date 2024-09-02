class Carro{
    Nome
    Potencia
    VelocidadeMax
    Aceleracao

    constructor (nome, potencia, velocidadeMax, aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMax = velocidadeMax
        this.Aceleracao = aceleracao
    }

    tempo (distancia){
        resultado = distancia/(this.VelocidadeMax/this.Aceleracao)
        return resultado
    }
}

class Corrida{
    Nome 
    Tipo 
    Distancia
    Participante
    Vencedor

    constructor(nome, tipo, distancia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participante = ""
        this.Vencedor = []
    }

    definirVencedor(){
        let menorTempo = this.Participante[0].tempo(this.Distancia)
        let vencedor = this.Participante[0]

        for (let i = 1; i < this.Participante.length; i++){
            let Tempo = this.Participante[i].tempo(this.Distancia) 
            if (Tempo < menorTempo){
                menorTempo = Tempo
                vencedor = this.Participante[i]
            }          
        }

        return this.Vencedor = vencedor
    }

    exibirvencedor(){
        alert('O vencedor é: '+this.Vencedor.Nome)
    }
}

let corrida = new Corrida('Renault', 'Fórmula 1', 50000)
corrida.Participante[0] = new Carro('Jeep', 140, 150, 9)
corrida.Participante[1] = new Carro('Corsa', 120, 140, 7)
corrida.Participante[2] = new Carro('Fusca', 130, 170, 6)

corrida.definirVencedor()
corrida.exibirvencedor()
