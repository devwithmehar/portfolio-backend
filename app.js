import express from 'express';
import cors from 'cors';
import router from './routes/router.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.port || 8000;

app.get('/',(req,res) => {

  res.send("Hey This is the backend of the e-portfolio");
});

app.listen(port, () =>{
  console.log(`Server is listening to the PORT: ${port}`);
})