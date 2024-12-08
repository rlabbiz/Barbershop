import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const errorHandler = (err, req, res, next) => {
    // Set the status code to 500 if the status code is 200
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    // Set the status code to the status code of the error
    res.status(statusCode);

    // Send a JSON response with the error message
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });

    // Call the next middleware
    next();
}