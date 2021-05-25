const router = require('express').Router()

const { validateRegister } = require('../../../client/src/utils/validate')
const { register, login } = require('../controllers/auth')

router.post('/register', validateRegister, register)
router.post('/login', login)

module.exports = router