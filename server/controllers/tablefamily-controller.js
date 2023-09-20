// const { TablePc } = require('../models/models')
const { QueryTypes } = require('sequelize');
const sequelize = require("../db")

class TableFamilyController {
    async tableFamilyGet(req, res) {
        const { citizenId } = req.body

        if (!citizenId) return res.status(400).json({ status: 400, error: "Error" });

        const tablefamily = await sequelize.query(`SELECT * FROM "tablefamilies" WHERE "tablecitizenId"=${citizenId}`, { type: QueryTypes.SELECT });

        if (tablefamily.length === 0) return res.status(400).json({ status: 400, error: "This man has no family" });

        return res.status(200).json({ status: 200, tablefamily });
    }
    async tableFamilyAdd(req, res) {
        const { name, surname, patronymic, birthday, parent, сitizenship, tablecitizenId } = req.body

        const checkTablefamily = await sequelize.query(`SELECT * FROM "tablefamilies" WHERE "name"='${name}' AND "surname"='${surname}' AND "patronymic"='${patronymic}' AND "birthday"='${birthday}' AND "tablecitizenId"='${tablecitizenId}'`, { type: QueryTypes.SELECT });

        if (checkTablefamily.length !== 0) return res.status(400).json({ status: 400, message: "Such a person already exists" });


        await sequelize.query(`INSERT INTO tablefamilies ("name", "surname", "patronymic" , "birthday", "parent", "сitizenship" , "tablecitizenId" ) VALUES ('${name}', '${surname}', '${patronymic}', '${birthday}', '${parent}', '${сitizenship}', '${tablecitizenId}')`, { type: QueryTypes.INSERT });

        const tablefamily = await sequelize.query(`SELECT * FROM "tablefamilies" WHERE "tablecitizenId"=${tablecitizenId}`, { type: QueryTypes.SELECT });

        return res.status(200).json({ status: 200, message: "Family member added", tablefamily });
    }
    async tableFamilyUpdate(req, res) {
        const { id, name, surname, patronymic, birthday, parent, сitizenship, tablecitizenId } = req.body

        const checkTablefamily = await sequelize.query(`SELECT * FROM "tablefamilies" WHERE "id"='${id}'`, { type: QueryTypes.SELECT });

        if (checkTablefamily.length === 0) return res.status(400).json({ status: 400, message: "Such a person does not exist" });


        await sequelize.query(`UPDATE "tablefamilies" SET "name"='${name}', "surname"='${surname}', "patronymic"='${patronymic}', "birthday"='${birthday}', "parent"='${parent}', "сitizenship"='${сitizenship}' WHERE  "id"=${id}`, { type: QueryTypes.UPDATE });

        const tablefamily = await sequelize.query(`SELECT * FROM "tablefamilies" WHERE "tablecitizenId"=${tablecitizenId}`, { type: QueryTypes.SELECT });

        return res.status(200).json({ status: 200, message: "Family member updated", tablefamily });
    }
    async tableFamilyRemove(req, res) {
        const { familyId } = req.body

        const checkTablefamily = await sequelize.query(`SELECT * FROM "tablefamilies" WHERE "id"=${familyId}`, { type: QueryTypes.SELECT });

        if (checkTablefamily.length === 0) return res.status(400).json({ status: 400, message: "There is no citizen" });

        await sequelize.query(`DELETE FROM "tablefamilies" WHERE "id"=${familyId}`, { type: QueryTypes.DELETE });
        return res.status(200).json({ status: 200, message: "Сitizen removed" });
    }
}

module.exports = new TableFamilyController()