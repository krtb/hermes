const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send({hi: 'there'})
})

console.log('App is running on port')
app.listen(5000)