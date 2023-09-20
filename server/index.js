require('dotenv').config()

const express = require('express');
const app = express();
const sequelize = require("./db")
const tableFamily = require("./models/table-family")
const tableCitizen = require("./models/table-citizen")

// cors walidation
const WEBSITE = process.env.WEBSITEPORT
const cors = require('cors')
app.use(cors({ origin: WEBSITE }));
// cors --
const routers = require('./routers/index')

app.use(express.json())

app.use("/api", routers)

const SERVER_PORT = process.env.SERVER_PORT


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(SERVER_PORT, (error) => {
            error ? console.log(error) : console.log(`server listen --> http://localhost:${SERVER_PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()