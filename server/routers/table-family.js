const Router = require('express')
const router = new Router()
const tableFamily = require('../controllers/tablefamily-controller')

router.post('/', tableFamily.tableFamilyGet)
router.post('/tableFamilyAdd', tableFamily.tableFamilyAdd)
router.post('/tableFamilyUpdate', tableFamily.tableFamilyUpdate)
router.post('/tableFamilyRemove', tableFamily.tableFamilyRemove)

module.exports = router