
const espacoDePalavras = document.getElementById("palavras");
const tentativasRestantesElement = document.getElementById("tentativas");
const letrasDoAlfabeto = document.querySelectorAll(".letras");
const resultadoJogo = document.getElementById("resultado");


const palavras = [
    "computador", "guitarra", "teclado", "banana", "cadeira",
    "oculos", "janela", "cachorro", "elefante", "montanha",
    "telefone", "ponte", "caneta", "livro", "escola",
    "estrada", "amarelo", "noite", "tempo", "universo",
    "viagem", "pintura", "floresta", "bola", "vento",
    "oceano", "porta", "relampago", "amizade", "foguete"
  ];
  
  const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
  
  espacoDePalavras.innerHTML = palavraSecreta
    .split("")
    .map(() => `<div class="letra">_</div>`)
    .join("");
  
