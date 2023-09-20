// const { TableCar } = require('../models/models')
const { QueryTypes } = require('sequelize');
const sequelize = require("../db")

class TableCitizenController {
    async tableCitizenGet(req, res) {
        const tablecitizen = await sequelize.query("SELECT * FROM tablecitizens", { type: QueryTypes.SELECT });

        if (tablecitizen.length === 0) return res.status(400).json({ status: 400, error: "There is no data about cars" });

        return res.status(200).json({ status: 200, tablecitizen });
    }
}

module.exports = new TableCitizenController()