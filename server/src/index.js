const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const expressValidator = require('express-validator');
const morgan = require('morgan')
require('dotenv').config()

const routesAuth = require('./routes/auth')

const app = express()

// DATABASES
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('DB Connected!'))

// MIDDLEWARES
const corsOption = {
  credentials: true,
  origin: true
}
app.use(morgan('dev'))
app.use(cors(corsOption))
app.use(expressValidator())
app.use(bodyParser.json())
app.use(cookieParser())

// ROUTES
app.use('/api', routesAuth)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening to port ${port}`))