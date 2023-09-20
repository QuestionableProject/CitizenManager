const sequelize = require("../db")
const { DataTypes } = require("sequelize")

const TableFamily = sequelize.define('tablefamily', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    patronymic: { type: DataTypes.STRING},
    birthday: { type: DataTypes.DATE},
    parent: { type: DataTypes.STRING },
    сitizenship: { type: DataTypes.STRING},
    createdAt: { type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()') },
    updatedAt: { type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()') },
})

module.exports = {
    TableFamily
}