console.log('in client');   

$(document).ready(onReady);

let opNumObject = {
    // firstNum: 
    // secondNum: 
    // op:
};

function onReady (){

    console.log("ready with NODEMON girl!!")

    $('#firstNumber').on('submit', numAdder)//some function to store number
    $('#secondNumber').on('submit', numAdder)//some function to second number
    $('#plusBtn').on('click', opPlusAdder)//store this operator
    $('#minusBtn').on('click', opMinusAdder)//store this operator
    $('#multBtn').on('click', opMultAdder)//store this operator
    $('#divBtn').on('click', opDivAdder)//store this operator
    $('#numberFields').on('equalBtn', equalFunction)//store this operator

}
console.log(opNumObject);

function equalFunction(evt){
    evt.preventDefault();

}

function numAdder(evt){
    evt.preventDefault();
    
    console.log('opNumAdder', opNumObject);
}

function opPlusAdder(evt){
    evt.preventDefault();
    opNumObject.op = '+';
}

function opMinusAdder(){

}

function opDivAdder(){

}

function opMultAdder(){

}