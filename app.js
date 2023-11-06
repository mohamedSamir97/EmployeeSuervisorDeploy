require("dotenv").config();
const cors = require('cors');

const express = require("express");
const initializeDatabase = require('./dbInit');
const app = express();
const userRouter = require("./api/users/user.router");
const employeeRouter = require("./api/employees/employee.router");

app.use(express.json());
//cors origin configuration
app.use(cors({
    origin: 'https://employeesupervisorfrontdeploy-ns8560rjw-mohamed-samirs-projects.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    optionsSuccessStatus: 200,
  }));

// Initialize the database
initializeDatabase();




app.use("/api/users", userRouter);
app.use("/api/employees", employeeRouter);
const port = process.env.APP_PORT || 4000;

app.use(express.static('frontend'));
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
