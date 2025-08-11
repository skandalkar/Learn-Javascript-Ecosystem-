/* 
    This file will specify the connection with database.
    It will use mongoose and ORM to connect with MongoDB.
*/

const mongoose = require('mongoose');

require('dotenv').config(); // Load environment variables from .env file


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("Database connected successfully.");
    } catch (error) {
        console.log("Database connection failed.");
        process.exit(1);
    }
};

module.exports = dbConnection;