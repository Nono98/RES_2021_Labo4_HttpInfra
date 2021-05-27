$(function() {
        console.log("Loading dices");

        function loadDices() {
                $.getJSON( "/api/dices/", function( dices ) {
                        console.log(dices);
                        var message = "No dices";
                        if ( dices.length > 0 ) {
                                message = "Nombre de faces: " + dices[0].nbFaces + ", Resultat: " + dices[0].result;
                        }
                        $(".resultDice").text(message);
                });
        };

        loadDices();
        setInterval( loadDices, 2000 );
});
