const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8081;

app.get('/',(req,res) => {

  res.send("Hey This is the backend of the e-portfolio");
});

app.listen(port, () =>{
  console.log(`Server is listening to the PORT: ${port}`);
})