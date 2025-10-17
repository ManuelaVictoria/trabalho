let listaDeNumerosSorteados = [];
let numeroLImite = 10;
let numeroSeceto = gararNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um nuḿero entre 1 e 10');
}
