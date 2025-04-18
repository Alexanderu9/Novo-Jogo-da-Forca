
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

    const letrasDivs = document.querySelectorAll("#palavras > div");
    const letrasErradasContainer = document.getElementById("insertarLetras");
    
    let letrasCertas = [];
    let letrasErradas = [];
    
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
          letrasErradasContainer.textContent = letrasErradas.join(" ");
        }
    
 
        divLetra.style.pointerEvents = "none";
        divLetra.style.opacity = "0.5";
      });
    });