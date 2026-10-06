const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu-principal");


// MENU ACESSÍVEL

btnMenu.addEventListener("click", function () {

    const estaAberto =
        btnMenu.getAttribute("aria-expanded") === "true";

    btnMenu.setAttribute(
        "aria-expanded",
        String(!estaAberto)
    );

    menu.setAttribute(
        "aria-hidden",
        String(estaAberto)
    );

    menu.classList.toggle(
        "aberto",
        !estaAberto
    );

});


// AUMENTAR FONTE

const aumentarFonte =
    document.getElementById("aumentar-fonte");

let tamanhoFonte = 16;

aumentarFonte.addEventListener("click", function () {

    if (tamanhoFonte < 24) {
        tamanhoFonte += 2;
        document.body.style.fontSize =
            tamanhoFonte + "px";
    }

});


// DIMINUIR FONTE

const diminuirFonte =
    document.getElementById("diminuir-fonte");

diminuirFonte.addEventListener("click", function () {

    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize =
            tamanhoFonte + "px";
    }

});


// ALTO CONTRASTE

const contraste =
    document.getElementById("contraste");

contraste.addEventListener("click", function () {

    document.body.classList.toggle("alto-contraste");

});


// NARRAÇÃO

const narrar =
    document.getElementById("narrar");

function falar(texto) {

    const voz =
        new SpeechSynthesisUtterance(texto);

    voz.lang = "pt-BR";
    voz.rate = 1;

    speechSynthesis.cancel();

    speechSynthesis.speak(voz);
}


narrar.addEventListener("click", function () {

    const texto =
        document.querySelector("main").innerText;

    falar(texto);

});