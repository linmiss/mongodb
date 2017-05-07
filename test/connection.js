const mongoose = require('mongoose');

//connect to mongodb

mongoose.connect('mongodb://localhost/test');

mongoose.connection.once('open', () => {
    console.log('connection has been made, now make firworks');
}).on('error', () => {
    console.log('connection error');
});