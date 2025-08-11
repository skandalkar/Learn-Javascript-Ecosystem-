const mongoose = require('mongoose');

require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully.");
    } catch (error) {
        console.log("Database connection failed.");
        process.exit(1);
    }
};

module.exports = dbConnection;