// const express = require('express');
import express from 'express';


const app = express();

app.listen(3000, () => {
    console.log('server started');

    app.get('/', (req, res) => {
        console.log(req);
        res.send('Hello World');
    });

    app.get('/api', (req, res) => {
        res.send('Hello API');
    });

    app.get('/api/json', (req, res) => {
        res.json({ message: 'Hello JSON' });
    });
});