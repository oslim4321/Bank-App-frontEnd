

import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserInfo } from '../GetUserInfo'

export const MakeRequestToServer = () => {
    // const router = useRouter();
    const dispatch = useDispatch()
    let id: any
    if (typeof window !== "undefined") {
        id = localStorage.getItem('userId')
    }

    const router = useRouter()
    useEffect(() => {
        const getSingleUser = () => {
            if (id) {
                getUserInfo(id, dispatch)
                console.log('done')
            }
            else {
                // router.push(`/404`);
            }

        }
        getSingleUser()
    }, [])

}
