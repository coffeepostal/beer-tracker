//  Import our packages
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//  Setting up an Express server
const app = express()
//  Telling Express to generate combined logs using Morgan
app.use(morgan('combined'))
//  Telling Express to use body-parser to format JSON
app.use(bodyParser.json())
//  Cors has something to do with browsers/domains and locations (tutorial was vague)
app.use(cors())

//  Simple GET request to "status" end point
app.get('/status', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})


//  Tell the app to use port: 8081 as it's access point
app.listen(process.env.PORT || 8081)
