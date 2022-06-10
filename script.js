const mediaElem = document.getElementById("audio");
const mediaElem2 = document.getElementById("tick")
const apagado = document.getElementById("apagado");
const aceso = document.getElementById("aceso");
const explosao = document.getElementById("explosao");
let number = 60;
let myInterval = 0

function estourar() {
  mediaElem.currentTime = 0;
  mediaElem.play();
  aceso.style.display = "none";
  explosao.style.display = "flex";
}

function imprimir() {
  number--;
  document.querySelector("p").innerHTML = number;
  mediaElem2.currentTime = 0;
  mediaElem2.play();

  if (number == 0) {
    clearInterval(myInterval)
    estourar ()
  }
}

document.getElementById("aceso").addEventListener("click", function () {
  clearInterval(myInterval);
  aceso.style.display = "none";
  apagado.style.display = "flex";
});

document.getElementById("button").addEventListener("click", function () {
  myInterval = setInterval(imprimir, 1000);
  document.querySelector("p").innerHTML = number;
  apagado.style.display = "none";
  aceso.style.display = "flex";
});

document.getElementById("reiniciar").addEventListener("click", function () {
  explosao.style.display = "none";
  aceso.style.display = "none";
  apagado.style.display = "flex";
  clearInterval(myInterval);
  mediaElem.pause();
  mediaElem2.pause();
  number = 60
  document.querySelector("p").innerHTML = ""
});
