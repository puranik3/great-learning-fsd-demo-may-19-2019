var numberButtons = document.querySelectorAll( '.btn-number' );
console.log( numberButtons );

function numberButtonClick() {
    var selectedDigit = this.innerHTML;
    document.querySelector( '.display' ).value = document.querySelector( '.display' ).value + selectedDigit;
}

for( var i = 0; i < numberButtons.length; i++ ) {
    numberButtons[i].addEventListener( 'click', numberButtonClick );
}

var operatorButtons = document.querySelectorAll( '.btn-op' );
console.log( operatorButtons );

function operatorButtonClick() {
    var value = document.querySelector( '.display' ).value;
    var lastCharacter = value[value.length - 1];

    if( lastCharacter == '+' || lastCharacter == '-' || lastCharacter == '*' ) {
        return;
    } else {
        var selectedOperand = this.innerHTML;
        document.querySelector( '.display' ).value = document.querySelector( '.display' ).value + selectedOperand;
    }
}

for( var i = 0; i < operatorButtons.length; i++ ) {
    operatorButtons[i].addEventListener( 'click', operatorButtonClick );
}

var evaluateButton = document.querySelector( '.btn-eval' );

function evaluateButtonClick() {
    var toEvaluate = document.querySelector( '.display' ).value;
    var result = eval( toEvaluate );
    document.querySelector( '.result' ).innerHTML = result;

}

evaluateButton.addEventListener( 'click', evaluateButtonClick );