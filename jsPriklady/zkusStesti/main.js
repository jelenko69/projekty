alert('máme tad náhodné čísla od 1-5 když se trefíš tak získaneš 10 bodů');



let body = 0;


for (let i = 0; i < 10; i++) {
    let rc = Math.floor((Math.random() * 6) + 1);
    let typ = prompt("Zadej svůj typ: ");
    if (typ == rc) {

        alert('Dobře ty tvůj tip byl správný prokačuj dále !');
        body = + body + 10;
    }
    else {
        alert('Jsi špatný jak schody ve výtahu, zkus to znovu');
    }
    alert('Tvůj počet bodů je: ' + body);

    console.log(rc);
}

document.write("tvůj výsledek bodů je: " + body);

if(body>=70){

    document.write('<br> Ty jsi upsal duší ďáblu ty blázne ?!');
}
else if(body>=60) {

    document.write('<br> Ty máš ale z pekla štěstí čéče, klidně by si mohl vsadit sportku!');
}

else if(body>=40) {

    document.write('<br> Ještě kousek a můžu to balit! 🤸‍');
}

else if(body>=30) {

    document.write('<br> I to se počítá 🙌');
}
else{
    document.write('<br> Zkus to příště');
}