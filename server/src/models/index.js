//  Include the "file system" module so Express can access files
const fs = require('fs')
//  Helper that makes finding the path to file easier
const path = require('path')
//  Importing Sequelize to allow us to work wiht SQL-type DB
const Sequelize = require('sequelize')
//  Import our config file
const config = require('../config/config')
//  Create a blank DB
const db = {}

//  Create a new Sequelize object
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

//  Read through all models in "models" folder
fs
    //  Read current directory
    .readdirSync(__dirname)
    //  Filter out "index.js"
    .filter((file) =>
        file !== 'index.js'
    )
    //  Loop through results
    .forEach((file) => {
        //  Use path.join to make a full url for each file, then import it
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

//  Give ourselves access to the "sequelize" and "Sequelize" objects
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db