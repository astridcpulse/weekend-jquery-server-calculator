
$(document).ready(onReady);

let opNumObject = {
    // firstNum: 
    // secondNum: 
    // op: 
};

function onReady (){
    dispHist(); //call display history function on page load

    $('#plusBtn').on('click', opPlusAdder) //store + operator
    $('#minusBtn').on('click', opMinusAdder) //store - operator
    $('#multBtn').on('click', opMultAdder) //store / operator
    $('#divBtn').on('click', opDivAdder) //store * operator
    $('#numberFields').on('click', '#equalBtn', equalFunction) //sends inputs to server
}

//test: should be empty object
console.log(opNumObject);

function equalFunction(evt){
    evt.preventDefault();
    $('button').removeClass('blue');
    opNumObject.firstNum = Number($('#firstNumber').val()); //value of first number field in calculator
    opNumObject.secondNum = Number($('#secondNumber').val()); // value of second number field in calculator
    
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
// Functions for operator buttons
// plus
function opPlusAdder(evt){
    $('button').removeClass('blue');
    evt.preventDefault();
    opNumObject.op = '+';
    $('#plusBtn').addClass('blue');
}
// minus
function opMinusAdder(evt){
    $('button').removeClass('blue');
    evt.preventDefault();
    opNumObject.op = '-';
    $('#minusBtn').addClass('blue');
}
// divide
function opDivAdder(evt){
    $('button').removeClass('blue');
    evt.preventDefault();
    opNumObject.op = '/';
    $('#divBtn').addClass('blue');
}
// multiply
function opMultAdder(evt){
    $('button').removeClass('blue');
    evt.preventDefault();
    opNumObject.op = '*';
    $('#multBtn').addClass('blue');
}
//function to display calculation history on page load 
function dispHist(){
    
    //run a GET to get the history and then display it
    $.ajax({
        url: '/calculation',
        method: 'GET'
    })
        .then((response) => {

            for( let index of response){
                $('#calcHistory').prepend(
                    `<li> 
                    ${index.firstNum} ${index.op} ${index.secondNum} = ${index.servTot}
                    </li>`
                )
            }
        });
}
// render the total calculated 
function render(array){
    $('#total').empty('');
    $('#total').append(`${array[array.length - 1].servTot}`);
    // append to the history thats already loaded
}

