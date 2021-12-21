const path = require('path');
require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 6000
const database = require('./services/database')
const app = express();
const authRoutes = require('./routes/auth');
const alertRoutes = require('./routes/alerts');
const menuRoutes = require('./routes/menu');
const signUpRoutes = require('./routes/Signup');
const countriesRoutes = require('./routes/countries');
const dropDownRoutes = require('./routes/dropDown');
const userProfileRoutes = require('./routes/userProfile');
const scheduleRoutes = require('./routes/viewSchedule');
const emailRoutes = require('./routes/emailManagement')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));


app.use(async (req, res, next) => {
    await database.initialize()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

let base_url = process.env.base_url || 'api'

app.use(`${base_url}`, menuRoutes);
app.use(`${base_url}/Auth`, authRoutes);
app.use(`${base_url}/Signup`, signUpRoutes)
app.use(`${base_url}/country`, countriesRoutes)
app.use(`${base_url}/Alerts`, alertRoutes);
app.use(`${base_url}/dropdown`, dropDownRoutes);
app.use(`${base_url}/userprofile`, userProfileRoutes);
app.use(`${base_url}/ViewSchedule`, scheduleRoutes);
app.use(`${base_url}/EmailManagement`, emailRoutes);



app.use(async (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ statusCode: status, message: message, data: data });
    await database.close()
});

app.listen(process.env.PORT, () => {
    console.log(`application started on port ${process.env.PORT}`)
})