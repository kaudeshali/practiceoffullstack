const express = require('express');
//importing express module

const app = express();
//use server functionality by calling express() function

app.use(express.static('public'));
//tell server to use the public directory 

app.listen(3999, function() {
    console.log('Application started on port 3999.')
});
//start listening for requests on port 3999 and log a message when it starts.