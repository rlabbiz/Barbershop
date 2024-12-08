import express from 'express';
import dotenv from 'dotenv';
import { router as contactRoute } from './routes/contactRoute.js';
import { errorHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

// take the environment variables 
const port = process.env.PORT;

// Create an express application
const app = express();

// Middleware to parse incoming requests with JSON payloads, and make it available on req.body
app.use(express.json());

// Define a route for the root of the application
app.use('/api/contacts', contactRoute);

// Middleware to handle errors
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
