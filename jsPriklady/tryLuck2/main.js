let body = 300;

let klkVsadil = 0;
let pZetony = 1600;
let nc = Math.floor((Math.random() * 4) + 1);
console.log(nc);
function restart() {

    location.reload();

}
function naPravidla() {
    alert('Pravidla jsou následující:\n->Tipuj čísla od 1-5, pokud se trefíš přičte se ti 150 bodů, ale pokud ne tak si ti odečte 25bodů\n->Vsázet svoje žetony můžeš jak chceš jediné co ti neprojde, tak je vsadění více počtů žetonů než máš\n->Goal je 1000 bodů');
}


function resetHry() {
    location.reload();
}

var x = 0;



function tipni() {
    let x = document.getElementById("tipBox").value;
    let tipNumber = x;

    let nc = Math.floor((Math.random() * 5) + 1);
    console.log(nc);


    if (tipNumber == nc) {

        body += parseInt(klkVsadil);

        document.getElementById("poznamka").innerHTML = "Dobře sis tipnul !";
        document.getElementById("body").innerHTML = body += 150;
        document.getElementById("pZetony").innerHTML = pZetony += 100;
    }
    else if (tipNumber == 7) {
        alert("Objevil si Easter Egg")
        document.getElementById("poznamka").innerHTML = "Easter Egg <br> „Vojtovo číslo“ 7️⃣7️⃣7️⃣7️⃣7️⃣ ";
        document.getElementById("body").innerHTML = body += 600;

    }
    else if (tipNumber > 5 && tipNumber < 7 || tipNumber > 7) {

        alert('Zkus tipnout číslo které je v daném rozmezí.\nPokus neznáš pravidla tak si je dole můžeš přečíst\n                                        ↓↓↓↓↓↓');

    }
    else {
        klkVsadil = 0;
        document.getElementById("poznamka").innerHTML = "Ajaj";
        document.getElementById("body").innerHTML = body -= 30;
    }

    if (body <= 1) {
        alert("Smůla prohrál jsi zkus to znovu");
        location.reload();

    }
    else if (body >= 1000) {
        document.getElementById("poznamka").innerHTML = "Vyhrál si čéče <br> 🤸‍️🎈🎉🎉🎉";
        document.getElementById('tip').disabled = true;
        document.getElementById('vsadit').disabled = true;

    }




}


function sazka() {
    let y = document.getElementById('vsadBox').value;
    klkVsadil = y;

    if (klkVsadil == 1) {
        alert('Úspešně jsi vsadil: ' + klkVsadil + " Žeton");
        document.getElementById("pZetony").innerHTML = pZetony -= klkVsadil;
    }
    else if (klkVsadil == 2 || klkVsadil == 3 || klkVsadil == 4) {
        alert('Úspešně jsi vsadil: ' + klkVsadil + " Žetony");
        document.getElementById("pZetony").innerHTML = pZetony -= klkVsadil;
    }
    else if (klkVsadil > pZetony) {

        alert('Vsadil si více žetonů než máš a to nemůžeš ! \nPokud chceš vsadit vsaď znovu ale, vlez se do svého rozpočtu !')
    }
    else {
        alert('Úspešně jsi vsadil: ' + klkVsadil + " Žetonů");
        document.getElementById("pZetony").innerHTML = pZetony -= klkVsadil;
    }



}
