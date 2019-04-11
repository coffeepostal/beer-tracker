//  Import Joi, our object authentication framework
const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        //  Setup the schema that the email and password much conform to using Joi
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        //  Setup scheme errors
        const {error, value} = Joi.validate(req.body, schema)

        //  Logic if there are/aren't errors
        if(error) {
            //  If there is an error, switch through the options
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: `🤬 You must provide a valid email address!`
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `🤬 The password you inputted failed to follow the following rules:
                        <ol>
                            <li>Characters can only be lower case alphabet, upper case alphabet, &amp; 0-9 numbers</li>
                            <li>Password has to be between 8 &amp; 32 characters long</li>
                        </ol>
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: `🤬 Ya broke it! I don't even know how you did, but you did.`
                    })
            }
        } else {
            //  Continue on to the next process
            next()
        }

    }
}