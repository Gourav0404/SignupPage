require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const AuthRouter = require('./Routes/AuthRouter');
require('./Models/db');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter)


app.get('/party', (req, res) => {
  res.send('Party Time');
})

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
})