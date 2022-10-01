console.log('in client');   

$(document).ready(onReady);

let opNumObject = {
    // firstNum: 
    // secondNum: 
    // op:
};

function onReady (){

    console.log("ready with NODEMON girl!!")

    $('#plusBtn').on('click', opPlusAdder)//store this operator
    $('#minusBtn').on('click', opMinusAdder)//store this operator
    $('#multBtn').on('click', opMultAdder)//store this operator
    $('#divBtn').on('click', opDivAdder)//store this operator
    $('#numberFields').on('click', '#equalBtn', equalFunction)//store this operator

}

//test: should be empty object
console.log(opNumObject);

function equalFunction(evt){
    evt.preventDefault();
    opNumObject.firstNum = $('#firstNumber').val(); //value of first number field in calculator
    opNumObject.secondNum = $('#secondNumber').val(); // value of second number field in calculator
    
    //tests: object should be fully populated with nums and op
    console.log('equal button working');
    console.log(opNumObject);
}

function numAdder(evt){
    evt.preventDefault();
    // opNumObject.firstNum = $('#firstNumber').val();
    // opNumObject.secondNum = $('#secondNumber').val();

}

function opPlusAdder(evt){
    evt.preventDefault();
    opNumObject.op = '+';
}

function opMinusAdder(evt){
    evt.preventDefault();
    opNumObject.op = '-';
}

function opDivAdder(evt){
    evt.preventDefault();
    opNumObject.op = '/';
}

function opMultAdder(evt){
    evt.preventDefault();
    opNumObject.op = '*';
}