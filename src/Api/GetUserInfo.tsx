import { UserRequest } from "./Request/Request"
import { fetchingStart, getUser, errorStart } from '../Redux/Slice/GetUserSlice'

export const getUserInfo = async (id: any, dispatch: any) => {
    dispatch(fetchingStart())
    try {
        const response = await UserRequest.get(`user/${id}`)
        dispatch(getUser(response.data));

    } catch (error: any) {
        console.log(error)
        dispatch(errorStart(error.response.data.error));
    }

}
