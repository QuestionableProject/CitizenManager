const Router = require('express')
const router = new Router()
const tableCitizen = require('../controllers/tablecitizen-controller')

router.get('/', tableCitizen.tableCitizenGet)

module.exports = router