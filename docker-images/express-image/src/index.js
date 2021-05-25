var Chance = require('chance');
var Express = require('express');

var app = Express();

var chance = new Chance();
var dice = chance.integer({ min: 1, max: 6 });

function generateNumber(numberMax) {
    if(numberMax < 1){
        return null;
    }
    return chance.integer({ min: 1, max: numberMax });
}

app.get('/:number?', ((req, res) => {
    const generatedNumber = generateNumber(req.params.number);
    if(!generatedNumber){
        return res.status(404).json({
            error:"Pas réussi à générer un nombre !"
        })
    }
    res.json({
        numberMax:req.params.number,
        generatedNumber:generatedNumber
    })
}));

app.listen(3000, function(){
    console.log('Accepting HTTP requests on port 3000 !');
});
