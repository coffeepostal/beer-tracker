//  Import the AuthenticationController
const AuthenticationController = require('./controllers/AuthenticationController')

//  Import our AuthenticationController policy
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    //  Using a POST request, we're sending credential info from the client to the server via "/register" using our AuthenticationController controller
    app.post('/register',
        //  The AuthenticationController policy "middleware" validates that the email and password are valid, before passing them through to the controller
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
}
