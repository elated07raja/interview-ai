const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cookieParser())

// Enable CORS
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the frontend
    credentials: true // Allow cookies to be sent
}))

const authRouter = require('./routes/auth.routes');

app.use('/api/auth', authRouter);


module.exports = app;

