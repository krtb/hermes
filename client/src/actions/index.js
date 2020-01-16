import axios from 'axios';
import {FETCH_USER }from './types';

// (purpose): fetch User profile from Express/Node API backend
export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user')
        dispatch({ type: FETCH_USER, payload: res.data })
}

// (purpose): handle token sent from Stripe to identify user
export const handleToken = (token) => async (dispatch) => {
        const res = await axios.post('api/stripe', token)
        dispatch({ type: FETCH_USER, payload: res.data })
}