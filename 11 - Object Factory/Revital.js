var movies = require ('./movies');
var revitalMovies = movies();
revitalMovies.favMovie = "The Notebook";
console.log("Revital favorite movie is: " + revitalMovies.favMovie);