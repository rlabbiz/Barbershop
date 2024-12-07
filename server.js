// const express = require('express');
import express from 'express';
import http from 'http';
import { neon } from '@neondatabase/serverless';

const sql = neon('postgresql://test_owner:B2AjdPtsM7iO@ep-sparkling-shadow-a26rmihf.eu-central-1.aws.neon.tech/test?sslmode=require');

const requestHandler = async (req, res) => {
  const result = await sql`SELECT version()`;
  const { version } = result[0];
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(version);
};

// http.createServer(requestHandler).listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

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