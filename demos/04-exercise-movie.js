// Create a movie object (any movie you like) - name, actors (an array), theatres, releaseDate, addActor()
// addActor accepts single argument (a string should be passed), and adds it to the actors array

var sholay = {
    name: 'Sholay',
    actors: [
        'Amitabh',
        'DHarmendra',
        'Hema',
        'Jaya',
        'Sanjeev',
        'Amjad'
    ],
    theatres: [
        'Urvashi',
        'PVR'
    ],
    releaseDate: 'May 20 1975',
    addActor: function( actor ) {
        this.actors.push( actor );
    }
};

sholay.addActor( 'Tiku' );
console.log( sholay );