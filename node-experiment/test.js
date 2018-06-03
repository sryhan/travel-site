// console.log("Hello world!");

var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML</h1>", function(error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("Everything worked");
    }
});

var photoLocation = "https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8744bee8594c81cac39bc702521b0acc&auto=format&fit=crop&w=1950&q=80"

https.get(photoLocation, function(response) {
    response.pipe(fs.createWriteStream(__dirname + "/picture.jpg"));
});