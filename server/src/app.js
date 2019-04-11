//  Import our packages
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

//  Setting up an Express server
const app = express()
//  Telling Express to generate combined logs using Morgan
app.use(morgan('combined'))
//  Telling Express to use body-parser to format JSON
app.use(bodyParser.json())
//  Cors has something to do with browsers/domains and locations (tutorial was vague)
app.use(cors())

//  Import Routes
require('./routes')(app)

//  Connect to configured DB, creat the tables (if they don't exist), sync the DB
sequelize.sync()
    //  then start the server
    .then(() => {
        //  Tell the app to use port: 8081 as it's access point
        app.listen(config.port)
        console.log(`🚨 🚨 🚨  Server started on port: ${config.port} 🚨 🚨 🚨`)
    })

