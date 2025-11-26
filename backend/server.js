import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;

// ⭐ MUST BE BEFORE ANY ROUTES OR DB CONNECTIONS
app.use(cors({
  origin: [
    "https://thrift-store-dusky.vercel.app",
    "http://localhost:5173",
    "http://localhost:5174"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token", "x-auth-token"],
  credentials: true,
}));

// ⭐ VERY IMPORTANT - handle all preflight requests
app.options("*", cors());

// ⭐ Required for POST/PUT body
app.use(express.json());

// DB connections
connectDB();
connectCloudinary();

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
  res.send("API working");
});

app.listen(port, () => console.log('Server started on port: ' + port));
