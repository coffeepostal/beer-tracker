//  Importing Axios to interact with Express
import axios from 'axios'

export default () => {
    //  Creating an Axios object, telling Axios what the base URL is
    return axios.create({
        baseURL: `http://localhost:8081`
    })
}