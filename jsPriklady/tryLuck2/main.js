let body = 100;

let klkVsadil = 0;
let pZetony = 600;
let nc = Math.floor((Math.random() * 4) + 1);
console.log(nc);
function restart() {

    location.reload();

}
function naPravidla() {
    alert(tip);
}


function resetHry() {
    location.reload();
}

var x = 0;



function tipni() {
    let x = document.getElementById("tipBox").value;
    let tipNumber = x;

    let nc = Math.floor((Math.random() * 4) + 1);
    console.log(nc);


    if (tipNumber == nc) {

     body += parseInt(klkVsadil);
        document.getElementById("poznamka").innerHTML = "Dobře sis tipnul !";
        document.getElementById("body").innerHTML = body += 150;
    }
    else if(tipNumber == 7){
        document.getElementById("poznamka").innerHTML = "Easter Egg";
        document.getElementById("body").innerHTML = body += 1000;

    }
    else {

        document.getElementById("poznamka").innerHTML = "Ajaj";
        document.getElementById("body").innerHTML = body -= 75;
    }

if(body<=1){
alert("Smůla prohrál jsi zkus to znovu");
location.reload();

}
else if(body >= 1000){
    function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}

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
    else {
        alert('Úspešně jsi vsadil: ' + klkVsadil + " Žetonů");
        document.getElementById("pZetony").innerHTML = pZetony -= klkVsadil;
    }



}
