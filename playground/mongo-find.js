//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect ')
    }

    console.log('connected');

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count ${count}');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to get todo', err);
    });

    //db.close();
} );