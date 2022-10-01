
console.log('in client');   

$(document).ready(onReady);
document.addEventListener('DOMContentLoaded', dispHist);

let opNumObject = {
    // firstNum: 
    // secondNum: 
    // op: 
};

function onReady (){

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

    // must select an operator button before POST will send
    if (opNumObject.hasOwnProperty('op')){

        $.ajax({
            url: '/calculation',
            method: 'POST',
            data: opNumObject
        })
            .then((response)=>{
                console.log('in POST');
                getCalculation();
            });
    } 
    // if no operator button is pressed
    else {
        alert('Please select an operator (+, -, *, or / ) before clicking equals button (=) ');
    }
}

function getCalculation(){

    $.ajax ({
        url: '/calculation',
        method: 'GET', 
    })
        .then((response) => {
            render(response);
        });
    
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

function dispHist(){
    console.log('hey buyd wahtuop');

    //run a GET to get the history and then display it
}
function render(array){
    $('#total').empty('');
    $('#total').append(`${array[array.length - 1].servTot}`);
    // append to the history thats already loaded
}

