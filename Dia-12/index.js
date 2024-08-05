let nomes = [];
let senhas = [];
let contador = 0;
let continuar = true;

do {
    let escolha = prompt('Deseja: (1)Cadastrar, (2)Login, (3)Excluir ou (4)Encerrar programa.');
    switch (escolha) {
        case "1":
            nomes[contador] = prompt('Insira seu nome:');
            senhas[contador] = prompt('Insira uma senha forte:');
            contador++;
            break;
        case "2":
            let nome = prompt('Qual o nome?');
            let senha = prompt('Qual a senha?');
            let loginSucesso = false;

            for (let i = 0; i < nomes.length; i++) {
                if (nome == nomes[i] && senha == senhas[i]) {
                    loginSucesso = true;
                    break;
                }
            }

            if (loginSucesso) {
                alert('Login feito com sucesso. Bem vindo!');
            } else {
                alert('Login ou senha incorretos!');
            }
            break;
        case "3":
            let nomeExcluir = prompt('Qual cadastro deseja excluir?');
            let encontrado = false;

            for (let i = 0; i < contador; i++) {
                if (nomeExcluir == nomes[i]) {
                    nomes.splice(i, 1);
                    senhas.splice(i, 1);
                    contador--;
                    encontrado = true;
                    alert('Cadastro excluído com sucesso.');
                    break;
                }
            }

            if (!encontrado) {
                alert('Cadastro não encontrado.');
            }
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log('Opção inválida, escolha outra!');
            break;
    }
} while (continuar);