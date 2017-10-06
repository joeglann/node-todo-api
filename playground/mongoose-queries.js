const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59cfea41f8ffca8a12882d72';

if (!ObjectID.isValid(id)) {
    return console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

User.findById(id).then((user) => {
    if (!user) {
        return console.log('user not found, invalid ID');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));