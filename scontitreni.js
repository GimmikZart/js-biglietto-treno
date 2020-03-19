// chiedere all’utente il numero di chilometri che vuole percorrere

var kilometri = prompt("inserire kilometri del viaggio");



// chiedere all’utente l’età del passeggero.

var età = prompt("inserire età passeggero");


// calcolare il prezzo totale del viaggio (Il prezzo del biglietto è definito in base ai km (0.21 € al km))

var prezzo = 0.21 * kilometri;




// va applicato uno sconto del 20% per i minorenni
// e del 40% per gli over 65

if (età < 19) {
  var prezzofinale = prezzo - ((prezzo * 20) / 100);
} else if ( età > 65) {
  var prezzofinale = prezzo - ((prezzo * 40) / 100);
} else {
  var prezzofinale = prezzo;
}

document.getElementById("prezzobiglietto").innerHTML = "Il costo del tuo biglietto sarà: " + prezzofinale;
