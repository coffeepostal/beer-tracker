//  Importing our api file
import api from '@/services/api'

export default {
    //  Setting up a register method, sending the credentials to the base URL / register
    register (credentials) {
        return api().post('register', credentials)
    }
}

//  Example of calling the register method:
// authenticationService.register({
//     email: 'testing@example.com',
//     password: '123456'
// })