$(document).ready(onReady);

function onReady(){
    console.log('in OnReady');
    $('#equal-button').on('click', handleEqualButtonClick)
}

function identifyOperand (operand){
    console.log('in identifyOperand');
    $("#plus-button") === "+";
    $("#minus-button")=== "-";
    $("#multiply-button") === "*" ;
    $("#division-button")=== "/" ; 
};

function renderCalculations (){
    $.ajax({
        method: 'GET',
        url: '/calculations'
    }).then((response)=>{
        console.log('response', response);
        $('#first-input').empty();
        $('#second-input').empty();

    for (let answer of calculations){
        $('#calculations-history').append(`
        <li>${data.firstInput} ${data.operand} ${data.secondInput} = ${data.result}
        `)
    }
    }).catch((error)=>{
        console.log('error',error);
    })
}


function handleEqualButtonClick(){
    console.log('in handleEqualButtonClick');
    const data = {
        firstInput:$('#first-input').val(),
        operand: identifyOperand(),
        secondInput:$('#second-input').val(),
        // result: createResult(),
    }
    $.ajax({
        method: 'POST',
        URL: '/calculations',
        data: data
    }).then((response)=>{
    console.log('verifying my POST');
    renderCalculations();
    }).catch((error) => {
        console.log('a for effort- f for not functioning');
    })
} 


