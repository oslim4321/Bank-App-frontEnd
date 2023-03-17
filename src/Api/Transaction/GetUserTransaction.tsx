import { UserRequest } from "../Request/Request"



export const getUserTransaction = async (id: any) => {
    const response = await UserRequest.get(`transaction/${id}`)
    return response
}

export const GetUserByAccNum = async (id: any) => {
    const res = await UserRequest.get(`user/getUserbaseTansac/${id}`)
    return res
}

export const makeTransferApi = async (data: any) => {
    const res = await UserRequest.post('sendedMoneyTransaction/', data)
    return res
}