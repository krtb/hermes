const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose');
const keys = require('../config/keys');

// not importing or requiring because Mocha or other testing will make multiple calls
const User = mongoose.model('users');

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: 'http://localhost:5000/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {

        // check if User google profile id already exists in database
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {

                    done(null, existingUser)

                } else {

                    // if !User, save to database, then return User
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user))

                }
            })
    }
));