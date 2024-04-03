const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    nome: String,
    telefone: String,
    title: String,
    description: String
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
