const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
require('dotenv').config()

const routesHome = require('./routes/home')

const app = express()

// DATABASES
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('DB Connected!'))

// MIDDLEWARES
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// ROUTES
app.use(routesHome)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening to port ${port}`))