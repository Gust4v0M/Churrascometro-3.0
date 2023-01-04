// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");

let inputCriancas = document.getElementById("criancas");

let inputTempo = document.getElementById("duracao");

let result = document.getElementById("calcula");

let escrita = document.getElementById("texto");


function calcula() {
  let adultos = inputAdultos.value;

  let criancas = inputCriancas.value;

  let tempo = inputTempo.value;



      var qntTotalCarne = carnePP(tempo) * adultos + (carnePP(tempo) / 2) * criancas;

      var qntTotalCerveja = brejaPP(tempo) * adultos 

      var qntTotalBebidas = carnePP(tempo) * adultos + (carnePP(tempo) / 2) * criancas;

      escrita.innerHTML =
      `<h2> Você vai preciar de</h2>`
        
      escrita.innerHTML = 
      `<p>${qntTotalCarne / 1000} Kg de carne</p>` 

      escrita.innerHTML += 
      ` <p>${Math.ceil(qntTotalCerveja / 350)} latinhas de cerveja</p>`

      escrita.innerHTML += 
      ` <p>${qntTotalBebidas / 1000} litros de suco</p>`
      
}

function carnePP(tempo) {
  if (tempo >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function brejaPP(tempo) {
  if (tempo >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(tempo) {
    if (tempo >= 6) {
      return 1000;
    } else {
      return 1500;
    }
  }


// carnePP();
// brejaPP();
// bebidasPP();
// calcula();
