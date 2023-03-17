import { UserRequest } from "../Request/Request"


export const sendTransaction = async (data: any) => {
    const response = await UserRequest.post('transaction', {
        data
    })
    return response
}