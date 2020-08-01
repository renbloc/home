import axios from 'axios';

export const testAction = () => async dispatch => {
    try {
        dispatch({
            type: 'AWAITING_WORKERS'
        })

        const response = await axios.get(`http://localhost:3001/users/users`)
        
        dispatch({
            type: 'SUCCESS_WORKERS',
            payload: response.data
        })
    } catch (error) {
        console.log(error);
        
    }
    
}