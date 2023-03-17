import axios from 'axios';
import { PublicRequest } from './Request/Request';
// const response = await axios.post('http://localhost:1234/api/v1/banking/user/OpenAccount', {

export const sendUserData = async (data: any) => {
    const response = await PublicRequest.post('auth/OpenAccount', {
        data
    })
    return response
}

export const sendUserLoginDetails = async (data: any) => {
    const response = await PublicRequest.post('auth/login', {
        data
    })
    return response
}