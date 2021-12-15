const path = require('path');
require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 6000
const database = require('./services/database')
const app = express();
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const signUpRoutes = require('./routes/Signup');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));


app.use( async (req, res, next) => {
    await database.initialize()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api/Auth', authRoutes);
app.use('/api', menuRoutes);
app.use('/api/signup', signUpRoutes)

app.use( async (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ statusCode: status, message: message, data: data });
    await database.close()
});

app.listen(PORT, () => {
    console.log(`application started on port ${PORT}`)
})