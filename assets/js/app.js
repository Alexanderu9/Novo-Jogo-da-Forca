const espacoDePalavras = document.getElementById("palavras");
const tentativasRestantesElement = document.getElementById("tentativasRestantes");
const letrasDoAlfabeto = document.querySelectorAll(".letras");
const resultadoJogo = document.getElementById("resultado");
const botaoReset = document.getElementById("reset");
const imgForca = document.querySelector("#imgForca img");

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


let letrasCertas = [];
let letrasErradas = [];
let tentativasRestantes = 9;

tentativasRestantesElement.textContent = `Tentativas: ${tentativasRestantes}`;
botaoReset.style.display = "none";

const letrasDivs = document.querySelectorAll("#palavras > div");

const nickname = localStorage.getItem("nickname") || "Jogador";
const nomeCompleto = localStorage.getItem("nomeCompleto") || "Usuário";
document.getElementById("boasVindas").textContent = `Bem-vindo, ${nomeCompleto}!`;

letrasDoAlfabeto.forEach(divLetra => {
  divLetra.addEventListener("click", () => {
    const letra = divLetra.textContent.toLowerCase();

    if (letrasCertas.includes(letra) || letrasErradas.includes(letra)) return;

    if (palavraSecreta.includes(letra)) {
      letrasCertas.push(letra);

      palavraSecreta.split("").forEach((char, idx) => {
        if (char === letra) {
          letrasDivs[idx].textContent = letra;
        }
      });
    } else {
      letrasErradas.push(letra);
      tentativasRestantes--;

      imgForca.src = `assets/img/${9 - tentativasRestantes}.png`;

      document.getElementById("insertarLetras").textContent = letrasErradas.join(" ");

      tentativasRestantesElement.textContent = `Tentativas: ${tentativasRestantes}`;
    }

    divLetra.style.pointerEvents = "none";
    divLetra.style.opacity = "0.5";

    const venceu = palavraSecreta
      .split("")
      .every(char => letrasCertas.includes(char));

    if (venceu) {
      resultadoJogo.textContent = `${nickname} Parabéns! Você venceu!`;
      botaoReset.style.display = "block";
    }

    if (tentativasRestantes === 0) {
      resultadoJogo.textContent = `${nickname} Você perdeu! A palavra era: ${palavraSecreta}`;
      botaoReset.style.display = "block";
    }
  });
});

botaoReset.addEventListener("click", () => location.reload());
