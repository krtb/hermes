const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    // create Stripe post request handler for user credit payment
    app.post('/api/stripe', requireLogin, async (req, res) => {

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        })
        // after successful charge to User credit card
        // take User model, add 5 credits to them, send User model back to the client
        // respond to request with newly updated User model

        // setup with passport.initialize() and passport.session()
        // User model
        req.user.credits += 5;
        const user = await req.user.save();
        //reference copy of User that was just saved to DB
        // send response back to User
        res.send(user);

    })
}