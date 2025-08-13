const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const dbConnection = require('./config/dbConnection');
const userAuthRoutes = require('./routes/userAuth.route');

dotenv.config();

dbConnection();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;


// Home API endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.use('/auth', userAuthRoutes);

app.use('/send',require('./routes/otpRoute'))

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});