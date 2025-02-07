// require('dotenv').config(path: './env');
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env' 
});

connectDB(); // Connect to MongoDB

/********

import express from "express";
const app = express();

(   async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) // Connect to MongoDB
            app.on('error', (error) => {
                console.log('Error: ', error)
                throw error
            }) // Handle errors

            app.listen(process.env.PORT, () => {
                console.log(`Server is running on port ${process.env.PORT}`)
            }) // Start the server
        } catch (error) {
            console.error('Error: ', error)
            throw error
        }
    }
)()

********/