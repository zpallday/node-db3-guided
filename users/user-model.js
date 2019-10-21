const db = require('../data/db-config.js');

module.exports = {
   find,
   findById,
   findUserposts,
   add
}

function find() {
   return  db('users') 
}
function findById(id) {
    return db('users').where({ id })
    .first();
}

function findUserposts(id) {
return db('posts as p')
.join('users as u', 'u.id', '=', 'p.user_id')
.where({user_id: userId})
.select('p.id', 'p.contents as quote', "u.username as saidBy")
}

function add(user) {
    return db('users').insert(user, 'id');
}