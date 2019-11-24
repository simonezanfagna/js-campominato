
function numeriRandom(min, max) {
  numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
  return numeroRandom;
}

var numeri_1_100 = [];
var i = 1;
while (i <= 100) {
  numeri_1_100.push(i);
  i++;
}
//console.log(numeri_1_100);

var numeri_1_80 = [];
var i = 1;
while (i <= 80) {
  numeri_1_80.push(i);
  i++;
}
//console.log(numeri_1_80);

var numeri_1_50 = [];
var i = 1;
while (i <= 50) {
  numeri_1_50.push(i);
  i++;
}
//console.log(numeri_1_50);


var listaNumeriRandom = [];

var difficoltà;
do {
  difficoltà = parseInt(prompt(" Digita 0 per giocare a difficoltà facile \n Digita 1 per giocare a difficoltà media \n Digita 2 per giocare a difficoltà difficile"));
} while (isNaN(difficoltà) || (difficoltà != 0 && difficoltà != 1 && difficoltà != 2));

if (difficoltà == 0) {
  while (listaNumeriRandom.length < 16) {
    var numero = numeriRandom(1, 100);
    if (!listaNumeriRandom.includes(numero)) {
      listaNumeriRandom.push(numero);
    }
  }
  var i = 0;
  var punti = 0;
  var listaNumeriUtente = [];
  while (i < 84) {
    var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 100"));
    if (!isNaN(numeroUtente) && (numeri_1_100.includes(numeroUtente))) {
      if (!listaNumeriRandom.includes(numeroUtente)) {
        if (!listaNumeriUtente.includes(numeroUtente)) {
          listaNumeriUtente.push(numeroUtente);
          if (punti == 84 && i == 84) {
            console.log('Hai raggiunto il punteggio massimo \nIl tuo punteggio è :  ' + punti);
            document.getElementById('my-h1').innerHTML = 'Hai vinto! <br> Il tuo punteggio è :  ' + punti;
          }
          punti++;
        }
        else {
          alert('Il numero scritto è già stato utilizzato');
          i--;
        }
      }
      else {
        i = 84 ;
        console.log('GAME OVER');
        document.getElementById('my-h1').innerHTML = 'Game over';
        console.log('Il tuo punteggio è : ' + punti);
        document.getElementById('my-h2').innerHTML = 'Il tuo punteggio è : ' + punti;
      }
      //console.log('OK');
    }
    else {
      //console.log('NO');
      i--;
    }
    i++;
  }
  //console.log(punti);
}

else if (difficoltà == 1) {
  while (listaNumeriRandom.length < 16) {
    var numero = numeriRandom(1, 80);
    if (!listaNumeriRandom.includes(numero)) {
      listaNumeriRandom.push(numero);
    }
  }
  var i = 0;
  var punti = 0;
  var listaNumeriUtente = [];
  while (i < 64) {
    var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 80"));
    if (!isNaN(numeroUtente) && (numeri_1_80.includes(numeroUtente))) {
      if (!listaNumeriRandom.includes(numeroUtente)) {
        if (!listaNumeriUtente.includes(numeroUtente)) {
          listaNumeriUtente.push(numeroUtente);
          if (punti == 64 && i == 64) {
            console.log('Hai raggiunto il punteggio massimo \nIl tuo punteggio è :  ' + punti);
            document.getElementById('my-h1').innerHTML = 'Hai vinto! <br> Il tuo punteggio è :  ' + punti;
          }
          punti++;
        }
        else {
          alert('Il numero scritto è già stato utilizzato');
          i--;
        }
      }
      else {
        i = 64 ;
        console.log('GAME OVER');
        document.getElementById('my-h1').innerHTML = 'Game over';
        console.log('Il tuo punteggio è : ' + punti);
        document.getElementById('my-h2').innerHTML = 'Il tuo punteggio è : ' + punti;
      }
      //console.log('OK');
    }
    else {
      //console.log('NO');
      i--;
    }
    i++;
  }
  //console.log(punti);
}

else if (difficoltà == 2) {
  while (listaNumeriRandom.length < 16) {
    var numero = numeriRandom(1, 50);
    if (!listaNumeriRandom.includes(numero)) {
      listaNumeriRandom.push(numero);
    }
  }
  var i = 0;
  var punti = 0;
  var listaNumeriUtente = [];
  while (i < 34) {
    var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 50"));
    if (!isNaN(numeroUtente) && (numeri_1_50.includes(numeroUtente))) {
      if (!listaNumeriRandom.includes(numeroUtente)) {
        if (!listaNumeriUtente.includes(numeroUtente)) {
          listaNumeriUtente.push(numeroUtente);
          if (punti == 34 && i == 34) {
            console.log('Hai raggiunto il punteggio massimo \nIl tuo punteggio è :  ' + punti);
            document.getElementById('my-h1').innerHTML = 'Hai vinto! <br> Il tuo punteggio è :  ' + punti;
          }
          punti++;
        }
        else {
          alert('Il numero scritto è già stato utilizzato');
          i--;
        }

      }
      else {
        i = 34 ;
        console.log('GAME OVER');
        document.getElementById('my-h1').innerHTML = 'Game over';
        console.log('Il tuo punteggio è : ' + punti);
        document.getElementById('my-h2').innerHTML = 'Il tuo punteggio è : ' + punti;
      }
      //console.log('OK');
    }
    else {
      //console.log('NO');
      i--;
    }
    i++;
  }
  //console.log(punti);
}

console.log(listaNumeriRandom);
document.getElementById('lista-numeri-pc').innerHTML = 'Numeri scelti casualmente dal computer : ' + listaNumeriRandom;
