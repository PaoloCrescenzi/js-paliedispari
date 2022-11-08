// chiedo al giocatore di scegliere se pari o dispari e un numero tra 1 e 5
const sceltaPl = prompt("Scegli \"pari\" o \"dispari\" ");
const numeroPl = prompt("Scegli un numero da \"1\" a \"5\" ");
console.log("la mia scelta= " + sceltaPl)

if (sceltaPl !== "pari" && sceltaPl !== "dispari") {
    alert("Scegli tra pari e dispari");
} else if (isNaN(numeroPl) || numeroPl < 1 || numeroPl > 5) {
    alert("Inserisci un numero valido");
}


// numero casuale del computer
function casuale() {
    const numPc = Math.ceil(Math.random() * 5);
    return numPc;
}

let numCasuale = casuale()
console.log(numCasuale);

// sommo i numeri del giocatore e del pc
const numInt = parseInt(numeroPl);
let risultato = numCasuale + numInt;
console.log(risultato);

const risultatoSomma = check();
console.log(risultatoSomma);

// controllo se è pari dispari del risultato
function check(numero) {
    if (risultato % 2 === 0) {
        console.log("il risultato della somma è pari");
        return true;
    } else {
        console.log("il risultato della somma è dispari");
        return false;
    }
}

// Dichiaro il vincitore
if (((sceltaPl === "pari") && (risultatoSomma === true)) || ((sceltaPl === "dispari") && (risultatoSomma === false))) {
    console.log("Hai vinto");
} else {
    console.log("HAHAHAHAHA HAI PERSO")
}



//simbolo oppure alt+124