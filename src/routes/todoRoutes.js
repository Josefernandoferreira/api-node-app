const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// Rota para criar um novo item
router.post('/', async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).send(todo);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Rota para buscar todos os itens
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Rota para buscar um item por ID
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Rota para atualizar um item por ID
router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Rota para excluir um item por ID
router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
