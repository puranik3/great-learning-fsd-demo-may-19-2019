function sum( x, y ) {
    return x + y;
}

var result = sum( 11, 12 );
console.log( result );

// Exercise: Write a function that accepts an array of numbers as argument, and returns the sum of the numbers in the array
function sumArray( arr ) {
    var result = 0;

    for( var i = 0; i < arr.length; i++ ) {
        result = result + arr[i];
    }

    return result;
}

var numbers = [ 1, 2, 3 ];
result = sumArray( numbers );
console.log( result );