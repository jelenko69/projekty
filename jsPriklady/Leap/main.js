
let Rok = 1997;
let cislo1= 400;
let cislo2= 4;


function Rozpoznani(){
vys1 = Rok%cislo1;
vys2 = Rok%cislo2;


if(vys1 == 0 || vys2 == 0)
{

console.log("Is Leap");

}
else
console.log('no leap');



}

console.log(Rozpoznani());


