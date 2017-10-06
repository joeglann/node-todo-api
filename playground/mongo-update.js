//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect ')
    }

    console.log('connected');

    db.collection('Todos').findOneAndUpdate({
        //normally filter on _id: new ObjectID('id'),
        text: 'walk the dog'
    }, {
        //here we update fields
    $set: {
        completed: true 
        }
    }, {
        //here we want to return update, not the original
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }); 

    //db.close();
} );