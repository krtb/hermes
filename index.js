const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: 'http://localhost:5000/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {

        console.log('ACCESS TOKEN', accessToken);
        console.log('REFRESH TOKEN', refreshToken);
        console.log('profile:', profile);

        done(null, profile);
    }
));

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }
    )
)

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000

console.log(`App is running on port ${PORT}`)
app.listen(PORT)