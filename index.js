const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./services/passport')

const app = express()
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
console.log(`App is running on port ${PORT}`)
app.listen(PORT)