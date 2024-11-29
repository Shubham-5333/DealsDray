import express from 'express'
import adminRoutes from './routes/adminRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config()
import connectDB from './config/db.js';


const app = express();
const port = 5000 || process.env.PORT;
connectDB()

// Middleware
app.use(cors()); 
// app.use(bodyParser.json()); // To parse JSON request bodies
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',adminRoutes)



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
