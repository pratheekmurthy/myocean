const path = require("path");
require("dotenv").config();
const express = require("express");
const fs = require("fs");
const PORT = process.env.PORT || 6000;
const database = require("./services/database");
const app = express();
const authRoutes = require("./routes/auth");
const alertRoutes = require("./routes/alerts");
const menuRoutes = require("./routes/menu");
const commonRoutes = require("./routes/common");
const signUpRoutes = require("./routes/Signup");
const countriesRoutes = require("./routes/countries");
const dropDownRoutes = require("./routes/dropDown");
const userProfileRoutes = require("./routes/userProfile");
const scheduleRoutes = require("./routes/viewSchedule");
const emailRoutes = require("./routes/emailManagement");
const vesselRoutes = require("./routes/vessel");
const commodityRoutes = require("./routes/commodity");
const roeRoutes = require("./routes/roe");
const terminalRoutes = require("./routes/terminal");
const agentRoutes = require("./routes/agent");
const workFlowRoutes = require("./routes/workFlow");
const userRuleRoutes = require("./routes/userRule");
const spotRateRoutes = require("./routes/spotRate");

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use(
  "/api-documents",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, {
    explorer: true,
    swaggerOptions: {
      displayRequestDuration: true,
    },
  })
);
(async function () {
  await database.initialize();
})();

app.use(async (req, res, next) => {
  //await database.initialize()
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let base_url = process.env.base_url || "api";

app.use(`${base_url}`, menuRoutes);
app.use(`${base_url}/Auth`, authRoutes);
app.use(`${base_url}/Signup`, signUpRoutes);
app.use(`${base_url}/FormPref`, commonRoutes);
app.use(`${base_url}/country`, countriesRoutes);
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
app.use(`${base_url}/ActiveSurchargeRpt`, agentRoutes);
app.use(`${base_url}/WorkFlow`, workFlowRoutes);
app.use(`${base_url}/UserRule`, userRuleRoutes);
app.use(`${base_url}/SpotRate`, spotRateRoutes);

app.use(async (error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ statusCode: status, message: message, data: data });
  await database.close();
});

app.get("/swagger", (req, res) => {
  fs.readFile("./swagger_output.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const customer = JSON.parse(jsonString);

      res.status(200).send(customer);
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`application started on port ${process.env.PORT}`);
});
