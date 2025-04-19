
export const nomeCompleto = document.getElementById("nomeCompleto");
export const nickname = document.getElementById("nickname");
export const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("nickname", nickname.value);
    localStorage.setItem("nomeCompleto", nomeCompleto.value);
    window.location.href = "/index.html";
});
