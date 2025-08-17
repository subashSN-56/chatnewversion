// server.js
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from  '../src/routes/auth.route.js';
import userRoutes from  '../src/routes/user.route.js';
import chatRoutes from  '../src/routes/chat.route.js';
import connectDB from '../src/lib/db.js';
dotenv.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173", // or your frontend domain
  credentials: true,               // ✅ important
}));


// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('✅ Basic ES Module Express Server is running...');
});

app.use("/api/auth" , authRoutes);
app.use("/api/users" , userRoutes);
app.use("/api/chat" , chatRoutes);





// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
