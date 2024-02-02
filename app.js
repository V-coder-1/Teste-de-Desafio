//Exercicio 1
//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio (O_O)';

//Exercicio 2
//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarConsole(){
    console.log('O botão foi clicado!');
}
//Exercicio 4
//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function verificarAlert(){
    let motivo = prompt('Eu amo JS, porque?');
    alert(`Amo JS porque ${motivo}`);
}
//Exercicio 5 
//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil.
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function verificarPrompt() {
    let nomeDaCidade;

    do {
        nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil');

        // Verificar se o usuário cancelou a operação
        if (nomeDaCidade === null) {
            alert('Você cancelou a operação. Tente novamente.');
            return; // Sair da função se o usuário cancelar
        }
        // Verificar se o usuário inseriu um valor vazio ou inválido
        if (nomeDaCidade === '' || !/^[A-Za-zÀ-ÿ\s]+$/.test(nomeDaCidade)) {
            alert('Por favor, digite um nome de cidade válido.');
        }
    } while (nomeDaCidade === '' || !/^[A-Za-zÀ-ÿ\s]+$/.test(nomeDaCidade));

    alert(`Estive em ${nomeDaCidade} e lembrei de você.`);
}


//Exercicio 6
//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

function somandoDoisNumeros(){
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}

function subtracaoDoisNumeros(){
    let primeiroNumero1 = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero2 = parseInt(prompt('Digite o segundo número'));
    let resultado2 = primeiroNumero1 - segundoNumero2;
    alert(`${primeiroNumero1} - ${segundoNumero2} = ${resultado2}`);
}