import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/router.js';
import path from 'path';

dotenv.config();

const app = express();

app.use(express.json());


app.use(cors({
  origin: '*',
  methods: ['GET','PUT','PATCH'],
  optionsSuccessStatus: 200
}));


app.use(router);


const port = process.env.PORT || 8081;

app.get('/',(req,res) => {

  res.send("Hey This is the backend of the e-portfolio");
});


app.get('/health',(req,res) => {

  res.status(200).json({success: true});
});
app.listen(port, () =>{
  console.log(`Server is listening to the PORT: ${port}`);
})