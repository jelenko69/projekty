alert('máme tad náhodné čísla od 1-5 když se trefíš tak vyhráváš');

let typ= prompt("Zadej svůj typ: ");
let rc = Math.floor((Math.random()* 6));

if(typ==rc){

alert('Dobře ty vyhrál si, zkusi dát f5 a typnout znova po druhé se ti to zajísté nepovede');

}
else{
alert('Dej f5 a zkus to příště');
}

console.log(rc);