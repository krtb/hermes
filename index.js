const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: 'auths/google/callback'
    },
    (accessToken) => {
        console.log(accessToken);
    }
));

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }
    )
)

const PORT = process.env.PORT || 5000

console.log(`App is running on port ${PORT}`)
app.listen(PORT)