const express = require('express');
const mongoose = require('mongoose');
const server = express();
const products = require('./products.model');

mongoose.connect('mongodb://localhost/expressm');
server.get('/', (req, res) => {
    res.send('hello ElPrice!');
});

server.get('/test', (req, res) => {
    const { query } = req.query;
    const found = products.find({
        name: {
            "$regex": query
        }
    }, (err, docs) => {
        if (!docs.length) return res.send('Not Found');
        res.send(docs);
    });
});

server.listen(3000, () => {
    console.log('server started!');
});