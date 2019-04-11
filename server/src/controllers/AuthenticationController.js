//  Import User model from "models" folder
const {User} = require('../models')

module.exports = {
    //  Using async/await to allow data from DB to be gathered
    async register (req, res) {
        try {
            //  Create a user using the body that was passed in on the request
            const user = await User.create(req.body)
            //  If successful, send back the info as JSON
            res.send(user.toJSON())
        } catch (err) {
            //  If any errors get caught
            res.status(400).send({
                error: `🤬  This email address is already in use.`
            })
        }

    }
}