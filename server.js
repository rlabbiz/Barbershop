import express from 'express';
import dotenv from 'dotenv';
import { router as contactRoute } from './routes/contactRoute.js';

// Load environment variables
dotenv.config();

// take the environment variables 
const port = process.env.PORT;

// Create an express application
const app = express();

// app.use(express.json());
// Define a route for the root of the application
app.use(express.json());
app.use('/api/contacts', contactRoute);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
