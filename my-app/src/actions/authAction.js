import axios from 'axios';

import { returnErrors } from './errorAction'

export const authAction = ({ username, password }) => async dispatch => {
    try {
    
        dispatch({
            type: "USER_LOADING"
        })

        const config = {
            username: username,
            password: password
        }
        const response = await axios.post(`http://localhost:3001/users/login`, config)
        
        dispatch({
            type: "LOGIN_SUCCESS", 
            payload: response.data
        })

    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status))
        dispatch({
            type: "AUTH_ERROR"
        })
        
    }
    
}