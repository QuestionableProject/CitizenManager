const sequelize = require("../db")
const { DataTypes } = require("sequelize")
const { TableFamily } = require('./table-family')


const TableCitizen = sequelize.define('tablecitizen', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    patronymic: { type: DataTypes.STRING},
    birthday: { type: DataTypes.DATE},
    сitizenship: { type: DataTypes.STRING},
    createdAt: { type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()') },
    updatedAt: { type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()') },
})

TableCitizen.hasMany(TableFamily)
TableFamily.belongsTo(TableCitizen)

module.exports = {
    TableCitizen
}