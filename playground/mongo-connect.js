//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect ')
    }

    console.log('connected');

  

    // db.collection('Todos2').insertOne({
    //     text: 'todo2',
    //     completed: false

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Todos2').insertOne({
    //     text: 'todo3',
    //     completed: false

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Joe',
        age: 40,
        home: 'NY'
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
} );