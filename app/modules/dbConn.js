var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mongoDB = mongoose.connect('mongodb://localhost:27017/nodejsApi', {
    useMongoClient: true
});

mongoDB
    .then(function (db) {
        console.log('mongodb has been connected');
    })
    .catch(function (err) {
        console.log('error while trying to connect with mongodb');
    });

module.exports = mongoDB;