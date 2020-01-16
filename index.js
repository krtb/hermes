const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
require('./models/User') // require User before it's used in passport require below
require('./services/passport')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, });

const app = express()

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app);

// configuration for Express, ONLY when in production environment
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like main.js or main.css files
    app.use(express.static('client/build'));
    // Express will sever up the index.html file
    // if it doesn't recognize the route.
    const path = require('path');
    app.get('*', (req, res) => {
        path.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000
console.log(`App is running on port ${PORT}`)
app.listen(PORT)