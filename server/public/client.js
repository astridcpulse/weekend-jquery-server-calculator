
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
    opNumObject.firstNum = parseInt($('#firstNumber').val()); //value of first number field in calculator
    opNumObject.secondNum = parseInt($('#secondNumber').val()); // value of second number field in calculator
    
    //tests: object should be fully populated with nums and op
    console.log('equal button working');
    console.log(opNumObject);

    // must select an operator button, and inputs must be numbers before POST will send
    if (Number.isFinite(opNumObject.firstNum) && Number.isFinite(opNumObject.secondNum) && opNumObject.hasOwnProperty('op')){

        $.ajax({
            url: '/calculation',
            method: 'POST',
            data: opNumObject
        })
            .then((response)=>{
                console.log('in POST');
                getCalculation();
                opNumObject = {};
            });
    } 
    // if no operator button is pressed
    else {
        alert('Please select an operator (+, -, *, or / ), and enter numbers into the fields before clicking equals button (=) ');
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
    $('button').removeClass('blue');
    evt.preventDefault();
    opNumObject.op = '+';
    $('#plusBtn').addClass('blue');
}

function opMinusAdder(evt){
    $('button').removeClass('blue');
    evt.preventDefault();
    opNumObject.op = '-';
    $('#minusBtn').addClass('blue');
}

function opDivAdder(evt){
    $('button').removeClass('blue');
    evt.preventDefault();
    opNumObject.op = '/';
    $('#divBtn').addClass('blue');
}

function opMultAdder(evt){
    $('button').removeClass('blue');
    evt.preventDefault();
    opNumObject.op = '*';
    $('#multBtn').addClass('blue');
}

function dispHist(){
    
    //run a GET to get the history and then display it

    $.ajax({
        url: '/history',
        method: 'GET'
    })
        .then((response) => {

            for( let index of response){
                $('#calcHistory').prepend(
                    `<li> 
                    ${index.firstServNum} ${index.servOp} ${index.secondServNum} = ${index.servTot}
                    </li>`
                )
            }
        });
}

function render(array){
    $('#total').empty('');
    $('#total').append(`${array[array.length - 1].servTot}`);
    // append to the history thats already loaded
}

