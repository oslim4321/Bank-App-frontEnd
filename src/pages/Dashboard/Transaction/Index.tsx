import { useFormik } from 'formik'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { MakeRequestToServer } from '../../../Api/Request/GetUserFromServerAndDispatch'
import { UserSelect } from '../../../Redux/Slice/GetUserSlice'
import Loading from '../../../WebState/Loading'
import Select from './Select'
const Transactions: React.FC = () => {



    /* getting user info from backend if true */
    MakeRequestToServer()

    const User = useSelector(UserSelect)
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Transactions</title>
                <meta name='keywords' content='Transactions' />
            </Head>

            {
                User._id ?
                    <>
                        <h1 className="text-2xl font-bold mb-4">Transactions</h1>
                        <Select
                            accountNumber={User.accountNumber}
                        />
                    </>
                    :
                    <Loading />
            }
        </div>
    )
}

export default Transactions
