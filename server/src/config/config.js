//  Our global configuration variables
module.exports = {
    //  Server port to listen to
    port: process.env.PORT || 8081,
    //  DB settings
    db: {
        //  Each of these first attempts to connect to a real world DB, if it can't find those variables, it defaults to a local SQLite DB
        database: process.env.DB_NAME || 'beertracker',
        user: process.env.DB_USER || 'beertracker',
        password: process.env.DB_PASS || 'beertracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './beertracker.sqlite'
        }
    }
}
