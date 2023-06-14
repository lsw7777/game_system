const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//node app.js

// create application/json parser
const jsonParser = bodyParser.json();

// sample user data array
let users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
];

// get all users
router.get('/', (req, res) => {
    res.json(users);
});

// get a user by ID
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    if(user) {
        res.json(user);
    } else {
        res.status(404).send();
    }
});

// create a new user
router.post('/', jsonParser, (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.json(user);
});

// update an existing user
router.put('/:id', jsonParser, (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    if(userIndex !== -1) {
        const newUser = req.body;
        newUser.id = id;
        users[userIndex] = newUser;
        res.json(newUser);
    } else {
        res.status(404).send();
    }
});

// delete a user by ID
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    if(userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

module.exports = router;
