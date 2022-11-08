const parola = prompt ("inserisci una parola")
const parolaContraria = invertiParola(parola)

if(parola == parolaContraria){
    console.log("La tua parola è palindroma");
}else {
    console.log("La tua parola non è palindroma")
}

function invertiParola(wordReverse){
    const inversioneParola = wordReverse.split("").reverse().join("");
    return inversioneParola;
}


