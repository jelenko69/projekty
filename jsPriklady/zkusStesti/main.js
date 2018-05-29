alert('máme tad náhodné čísla od 1-5 když se trefíš tak získaneš 10 bodů');



let body= 0;


for(let i = 0; i<10;i++){
    let rc = Math.floor((Math.random()* 6)+1);
    let typ= prompt("Zadej svůj typ: ");
if(typ==rc){

alert('Dobře ty tvůj tip byl správný prokačuj dále !');
body =+ body + 10;
}
else{
alert('Jsi špatný jak schody ve výtahu, zkus to znovu');
}
alert('Tvůj počet bodů je: ' +body);

console.log(rc);
}

document.write("tvůj výsledek bodů je: " +body);