//server setup--------
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express ();

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(PORT, () =>{
    console.log('we are schlive!!');
});
//-----------------------

let calcHistory = [];


app.post('/calculation', (req, res) =>{
    calcHistory.push(req.body);

    serverCalc(req.body);
    res.sendStatus(200)
    console.log(calcHistory); //test 

})

// app.get

// do the calculation and store it
function serverCalc(object){
    console.log(Number(object.firstNum));
}