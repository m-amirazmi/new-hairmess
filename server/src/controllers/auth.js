const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { handleError } = require('../utils/handleDBError')

exports.register = (req, res) => {
  const { body } = req
  const user = new User(body)
  user.save((error, user) => {
    if (!!error) return res.status(400).json({ error: handleError(error) })
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({ user })
  })
}

exports.login = (req, res) => {
  const { email, password } = req.body

  User.findOne({ email }, (error, user) => {
    if (error || !user) return res.status(400).json({ error: 'User not exists!' })
    if (!user.authenticate(password)) return res.status(401).json({ error: 'Email and password do not match!' })

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
    res.cookie('t', token, { expire: new Date() + 9999 })
    console.log(user)
    const { _id, name, email, role, createdAt, updatedAt } = user
    return res.json({ token, user: { _id, name, email, role, timestampCreated: new Date(createdAt).getTime(), timestampUpdated: new Date(updatedAt).getTime() } })
  })
}

exports.logout = (req, res) => {
  res.clearCookie('t')
  res.json({ message: 'Successfully Logout' })
}