// FIX FOR (create-react-app3.0) BUG
// would see the following errors:

// [1] When specified, "proxy" in package.json must be a string.

// [1] Instead, the type of "proxy" was "object".

// [1] Either remove "proxy" from package.json, or make it a string.

const proxy = require('http-proxy-middleware')
// forward requests to express/node API
module.exports = function (app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' }));
}