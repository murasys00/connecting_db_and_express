require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

const uri = process.env.MONGO_URI;
console.log(uri);
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

mongoose.connect(uri,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(() => console.log("Connected to MongoDB")).catch(err => console.log("Error connecting to MongoDB: ",err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
