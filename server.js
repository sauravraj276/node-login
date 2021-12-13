//mongodb
require('./config/db');
const app = require('express')();

const port = 3000;

//for accepting post from data we use body parser from express
const bodyParser =require('express').json;
app.use(bodyParser());

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
