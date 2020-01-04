const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose');
const keys = require('../config/keys');

// not importing or requiring because Mocha or other testing will make multiple calls
const User = mongoose.model('users');

// add cookie, unique info to User
passport.serializeUser((user, done) => {
    // done is a callback
    // user is object, just pulled out of database below
    done(null, user.id)
})

// remove info that was serialized
passport.deserializeUser((user, done) => {

    User.find(user.id).then(user => {
        done(null, user)
    })

})

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true,
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