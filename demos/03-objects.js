var john = {
    name: 'John',
    age: 32,
    emailids: [
        'john@gmail.com',
        'john@greatlearning.com'
    ],
    address: {
        first_line: '#24, New Horizon Apartments',
        city: 'Bangalore',
        pin_code: 560101
    },
    getPrimaryEmailId: function( x, y ) {
        return this.emailids[0];
    }
};

console.log( john.name );
console.log( john.age );
console.log( john.emailids );
console.log( john.emailids[0] );

console.log( john.address.city );

var result = john.getPrimaryEmailId( 10, 20 );
console.log( result );