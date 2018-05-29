$(function(){
    $(document)
        .disableSelection() // Zakázat výběr textu (označování)
        .on("dragstart", "img", function() { // Zakázat přetahování obrázků (výchozí z prohlížeče)
                 return false;
             })
         .on("contextmenu", function(e){ // Zakázat kontextového menu v prohlížeči
                return false;
              });
    
    $("body").mousemove(function(e){ // Když se myška pohne
        $("#crosshair").css("top", px(e.pageY-24)).css("left", px(e.pageX-24)); // Hejbne to s "kurzorem"
    });
    
    $("#crosshair").click(function(e){ // Po kliknutí
        $(this).css("z-index", "-1"); // Nastavení Z-INDEX na -1 (kdybych nenastavil, další řádek by vracel crosshair)
        element = document.elementFromPoint(e.pageX, e.pageY); // Zjištění elementu pod myší
        $(this).css("z-index", "10000"); // Vrácení zpět Z-INDEX (jinak by nebyl vidět crosshair pod terčem)

        if($(element).hasClass("terc")) // Pokud je pod myší element s třídou "terc"
        {
            $(element).effect("explode", false, 500); // BUM
            setTimeout(removeEl(element), 500); // po BUM odstraní element
            
            function removeEl(el) // Odstranění elementu
            {$(el).remove();}
            
            $("#bum").trigger("play"); // Přehrátí zvuku
            $("#shot").text(parseInt($("#shot").text())+1); // Přičteme bod
        }
        else
        {
            $("#nic").trigger("play"); // Přehrajeme zvuk
            $("#miss").text(parseInt($("#miss").text())+1); // Přičteme miss
        }
    });
    
    generovani = setInterval(generateNext, 1000); // Interval generování
    
    function generateNext() // Generovuní
    {
        posX = randomPosition(48, $("body").width()-48); // Pozice zleva
        posY = randomPosition(48, $("body").height()-48); // Pozice zeshora
        
        $("body").append('<img src="terc.png" class="terc" style="top:'+posY+'px;left:'+posX+'px;">'); // Objevení terče
        
        $("#time").text(parseInt($("#time").text())-1);
        if($("#time").text() == "0")
        {
            $(".terc").remove();
            clearInterval(generovani);
        }
    }
    
    function px(number) // Menší funkce na dopisování PX za číslo :P
    {return number + "px";}
    
    function randomPosition(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
