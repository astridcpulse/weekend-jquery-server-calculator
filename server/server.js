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
    // calcHistory.push(req.body);

    serverCalc(req.body);
    res.sendStatus(200)
    

})

// app.get

// do the calculation and store it
function serverCalc(object){
    // create temp object
    let fullCalcChar = {
        // firstServNum:
        // secondServNum:
        // servOp:
        // servTot:
    };

    // put client-sent info into object
    fullCalcChar.firstServNum = object.firstNum;
    fullCalcChar.secondServNum = object.secondNum;
    
    // calculating servTot and assigning servOp depending on operator selected on client side
    switch(object.op) {
        case '+':
            fullCalcChar.servTot = Number(object.firstNum) + Number(object.secondNum);
            fullCalcChar.servOp = '+';
            break;
        case '-':
            fullCalcChar.servTot= Number(object.firstNum) - Number(object.secondNum);
            fullCalcChar.servOp = '-';
            break;
        case '/':
            fullCalcChar.servTot = Number(object.firstNum) / Number(object.secondNum);
            fullCalcChar.servOp = '/';
            break;
        case '*':
            fullCalcChar.servTot = Number(object.firstNum) * Number(object.secondNum);
            fullCalcChar.servOp = '*';
            break;
    }
    // push object to global array calcHistory
    calcHistory.push(fullCalcChar);
    console.log(calcHistory); // test
}
