module.exports = (app) => {
    //  Using a POST request, we're sending credential info from the client to the server @ /register
    app.post('/register', (req, res) => {
        res.send({
            message: `User has been registered with the email address of: ${req.body.email}. 🚀`
        })
    })
}
