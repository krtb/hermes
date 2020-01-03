const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose');
const keys = require('../config/keys');

// not importing or requiring becuase Moch or other testing will make multiple calls
const User = mongoose.model('users');

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