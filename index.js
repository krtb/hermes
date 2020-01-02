const express = require('express')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()

const PORT = process.env.PORT || 5000

console.log(`App is running on port ${PORT}`)
app.listen(PORT)