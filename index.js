const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User') // require User before it's used in passport require below
require('./services/passport')

const app = express()
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
console.log(`App is running on port ${PORT}`)
app.listen(PORT)