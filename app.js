import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/router.js';
import path from 'path';

dotenv.config();

const app = express();

// Middleware to enforce HTTPS (if behind a load balancer like AWS Elastic Beanstalk)
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

// Allow JSON parsing
app.use(express.json());

// Configure CORS
app.use(cors({
  origin: '*', // Update this to specific domains for better security in production
  methods: ['GET', 'PUT', 'PATCH'],
  optionsSuccessStatus: 200
}));

// Register routes
app.use(router);

// Default route for backend info
app.get('/', (req, res) => {
  res.send("Hey, This is the backend of the e-portfolio");
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ success: true });
});

// Start the server
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});
