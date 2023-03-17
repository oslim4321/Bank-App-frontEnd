import Head from 'next/head'
import React, { useEffect } from 'react'
import Transfer from './Transfer'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/Store'
import Loading from '../../../WebState/Loading'
import { MakeRequestToServer } from '../../../Api/Request/GetUserFromServerAndDispatch'


const Index = () => {
    MakeRequestToServer()

    const { User, error, isFetching } = useSelector((state: RootState) => state.user)

    return (
        <>
            <Head>
                <title>Transfer</title>
                <meta name='keywords' content='Transfer' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css" />
            </Head>


            {!isFetching && !User && error && <div className="text-red-500 text-3xl text-center capitalize">{error}</div>}

            {User._id && !error && !isFetching ?

                <Transfer User={User} />

                :
                !error && <Loading />
            }

            
        </>
    )
}

export default Index