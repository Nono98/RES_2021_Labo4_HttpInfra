var Chance = require('chance');
var Express = require('express');

var app = Express();

var chance = new Chance();

function generateDices() {
    var numberOfDices = chance.integer({
        min: 0,
        max: 10
    });
    console.log("numberOfDices: " + numberOfDices);
    var dices = [];
    for (var i = 0; i < numberOfDices; i++){
        var faces = chance.integer({
            min: 6,
            max: 100
        });
        dices.push({
            nbFaces: faces, 
            result: chance.integer({ 
                min: 1, 
                max: faces
            })
        });
    }
    console.log(dices);
    return dices;
}

app.get('/', function(req, res) {
    res.send(generateDices());
});

app.listen(3000, function(){
    console.log('Accepting HTTP requests on port 3000 !');
});
