//server setup--------
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express ();

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(PORT, () =>{
    console.log('we are schlive!!'); //test: shows server is running
});
//-----------------------

// global array for storage of all input data and calculated total
let calcHistory = [];

// POST
app.post('/calculation', (req, res) =>{
    
    serverCalc(req.body); // send object to serverCalc function
    res.sendStatus(202) //sending back "good2go" status
})

// same GET url for both displaying the current answer and displaying the history
app.get('/calculation', (req, res) => {
    res.send(calcHistory);
})

// run the calculation and store it
function serverCalc(object){
    // calculating servTot and assigning it to the object
    switch(object.op) {
        case '+':
            object.servTot = Number(object.firstNum) + Number(object.secondNum);
            break;
        case '-':
            object.servTot= Number(object.firstNum) - Number(object.secondNum);
            break;
        case '/':
            object.servTot = Number(object.firstNum) / Number(object.secondNum);
            break;
        case '*':
            object.servTot = Number(object.firstNum) * Number(object.secondNum);
            break;
    }
    calcHistory.push(object);// push object to global array calcHistory
    console.log(calcHistory); // test: should display items inside calcHistory array
}
