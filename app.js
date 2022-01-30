const path = require('path');
require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 6000
const database = require('./services/database')
const app = express();
const authRoutes = require('./routes/auth');
const alertRoutes = require('./routes/alerts');
const menuRoutes = require('./routes/menu');
const commonRoutes = require('./routes/common');
const signUpRoutes = require('./routes/Signup');
const countriesRoutes = require('./routes/countries');
const dropDownRoutes = require('./routes/dropDown');
const userProfileRoutes = require('./routes/userProfile');
const scheduleRoutes = require('./routes/viewSchedule');
const emailRoutes = require('./routes/emailManagement');
const vesselRoutes = require('./routes/vessel')
const commodityRoutes = require('./routes/commodity')
const roeRoutes = require('./routes/roe')
const terminalRoutes = require('./routes/terminal');
const agentRoutes = require('./routes/agent');
const activeSurchargeRptRoutes = require('./routes/ActiveSurchargeRpt')
const ageingRoutes = require('./routes/ageing')
const areaRoutes = require('./routes/area')
const bookingStatusRoutes = require('./routes/bookingStatus')
const canRoutes = require('./routes/can')
const capacityRoutes = require('./routes/capacity')

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
app.use('/api-documents', swaggerUi.serve, swaggerUi.setup(swaggerFile));

(async function(){await database.initialize()})()

app.use(async (req, res, next) => {
    //await database.initialize()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

let base_url = process.env.base_url || 'api'

app.use(`${base_url}`, menuRoutes);
app.use(`${base_url}/Auth`, authRoutes);
app.use(`${base_url}/Signup`, signUpRoutes)
app.use(`${base_url}/FormPref`, commonRoutes)
app.use(`${base_url}/country`, countriesRoutes)
app.use(`${base_url}/Alerts`, alertRoutes);
app.use(`${base_url}/dropdown`, dropDownRoutes);
app.use(`${base_url}/userprofile`, userProfileRoutes);
app.use(`${base_url}/ViewSchedule`, scheduleRoutes);
app.use(`${base_url}/EmailManagement`, emailRoutes);
app.use(`${base_url}/Terminal`, terminalRoutes);
app.use(`${base_url}/Vessel`, vesselRoutes);
app.use(`${base_url}/Commodity`, commodityRoutes);
app.use(`${base_url}/roe`, roeRoutes);
app.use(`${base_url}/Company`, agentRoutes);
app.use(`${base_url}/ActiveSurchargeRpt`, activeSurchargeRptRoutes);
app.use(`${base_url}/Ageing`, ageingRoutes);
app.use(`${base_url}/Alerts`, alertRoutes);
app.use(`${base_url}/Area`, areaRoutes);
app.use(`${base_url}/BookingStatus`, bookingStatusRoutes);
app.use(`${base_url}/CAN`, canRoutes);
app.use(`${base_url}/Capacity`, capacityRoutes);

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