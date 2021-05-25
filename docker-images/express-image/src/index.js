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
        dices.push({
            launchNumber: i+1, 
            result: chance.integer({ 
                min: 1, 
                max: 6
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
