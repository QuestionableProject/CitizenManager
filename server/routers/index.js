const Router = require('express')
const router = new Router()
const tableCitizen = require("./table-citizen")
const tableFamily = require("./table-family")

router.use('/tableCitizen', tableCitizen)
router.use('/tableFamily', tableFamily)

module.exports = router