<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Deer Brands</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>


<div id="odkLista">
     <div id="levPruh"></div>
     <div id="horPruh">

     </div>
        <div id="tenPravy">
                <a href="" id="ZbKs1"><link rel="stylesheet" href="" style="color: rgb(255, 64, 64);">Košík</a>
                <div id="pravaLista">

                    </div>
                    <div id="levaLista">

                        </div>
                <a href="" id="ZbKs"><link rel="stylesheet" href="" style="color: rgb(255, 64, 64);">Hledat</a>

           </div>
<div id="odkazy">

    <a href="" id="xxx"><link rel="stylesheet" href="">Kontakty</a>
    <a href="zeny.php" id="xxx"><link rel="stylesheet" href="">Ženy</a>
    <a href="muzi.php"id="xxx"><link rel="stylesheet" href="">Muži</a>
    <a href="index.php"id="xxx"><link rel="stylesheet" href="">Home</a>



</div>


</div>
<div id="vyberLista">
<div id="podklad">
    <a href="" id="vyberPrvky" ><link rel="stylesheet" href="">Trička<br>Košile</a> <br>
    <a href="" id="vyberPrvky"><link rel="stylesheet" href="">Mikiny <br>Svetry</a> <br>

    <a href="" id="vyberPrvky"><link rel="stylesheet" href="" >Boty</a> <br> <br>
    <a href="" id="vyberPrvky" ><link rel="stylesheet" href="">Kalhoty<br>šortky</a>

</div>
    <div id="pdd">

 <a href="https://www.adidas.cz/originals">    <img src="logazn/adidas.jpg" alt="" width="100px"></link></a>
<br>
<a href="https://www.nike.com/cz/cs_cz/"><img src="logazn/nike.jpg" alt="" width="100px"></a>
<br>
<a href="https://www.stussy.com/"><img src="logazn/stussy.png" alt="" width="100px"></a>
<br>
<a href="https://cz.tommy.com/"><img src="logazn/tm.jpg" alt="" width="100px"></a>
<br>

<a href="https://www.fila.de/"><img src="logazn/fila.png" alt="" width="100px"></a>



<br>
<a href="https://www.vans.eu/"><img src="logazn/vans.png" alt="" width="100px"></a>
<br>
<a href="https://www.champion.com/"><img src="logazn/champ.png" alt="" width="100px"></a>



    </div>

   </div>
<div id="nadpis">

    Deer Brands
</div>

<div id="levObr">

<div id="oblastZbozi">  
    <table cellspacing="10px" cellpadding="5px">
    <?php 
    
     $pripojeni=new mysqli("localhost","root","","obchod");
$rpp=18;
isset($_GET['page']) ? $page=$_GET['page'] :$page=0;
if($page>=1){

    $start= ($page*$rpp) -$rpp;

}
else{
    $start=0;
}



    
$pripojeni->query("SET NAMES utf8");


    $vysledek=$pripojeni->query("select znacka.nazev_zn,znacka.id_zn,produkt.cena,produkt.pohlavi,produkt.popis,produkt.obrazek from produkt  join znacka on produkt.id_zn=znacka.id_zn where produkt.pohlavi='F' limit $start,$rpp");
    $numRow= $vysledek->num_rows;
    $celStr= ($numRow /$rpp);

echo"<div class=\"produkt\">";
    echo "<tr>";
echo "<br>";


for($i=0; $zaznam=$vysledek->fetch_assoc();$i++){

    echo "<td>". "<div class=\"obr\"> <img src=\"" . $zaznam['obrazek']."\">". "</div>";
    echo "Pohlaví: " . $zaznam["pohlavi"] . "<br>Cena: " . $zaznam["cena"] . "<br>Značka: " . $zaznam["nazev_zn"] . "<br>Produkt: ". $zaznam["popis"]. "</td>";


    if($i % 6 ===5){

        echo"</tr>";
        echo"<tr>";
    }

}
echo"</tr>";
echo"</div>";
echo"</table>";


for($x=1;$x<=ceil($celStr);$x++){

    echo"<a href='?page=$x'>$x | </a>";
}
echo($celStr);

    ?>
</div>

</div>
</div>



<div id="cervVrstva">



    </div>

<footer>
        Vytvořil: @Petr Jelen      |                Email: peeticekjelen@gmail.com           |           Tel: +420 734 696 165
</footer>
</body>
</html>