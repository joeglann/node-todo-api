//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect ')
    }

    console.log('connected');

    //delete many
    // db.collection('Todos').deleteMany({text: 'this thing is todo'}).then((result) => {
    //     console.log(result);
    //     //console.log(JSON.stringify(docs, undefined, 2));
    // });
    // //delete one
    // db.collection('Todos').deleteOne({text: 'eat'}).then((result) => {
    //     console.log(result);
    //     //console.log(JSON.stringify(docs, undefined, 2));
    // });    

    //find 1 and delete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
        //console.log(JSON.stringify(docs, undefined, 2));
    }); 

    //db.close();
} );