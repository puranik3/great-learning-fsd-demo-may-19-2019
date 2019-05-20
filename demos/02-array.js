// arrays / lists
var days = [
    'Sunday',
    2,
    'Tuesday',
    'Wednesday'
];

console.log( days[0] );
console.log( days[1] );
console.log( days[2] );
console.log( days[3] );

days[0] = 'Ravivar';
console.log( days );

days[4] = 'Thursday';

days.push( 'Friday' );
console.log( days );

console.log( days.length );