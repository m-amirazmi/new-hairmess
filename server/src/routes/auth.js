const router = require('express').Router()

const { validateRegister } = require('../utils/validate')
const { register, login } = require('../controllers/auth')

router.post('/register', validateRegister, register)
router.post('/login', login)

module.exports = router