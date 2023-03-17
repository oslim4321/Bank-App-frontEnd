import { NextPage } from 'next'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, selectCount } from '../Redux/Slice/Tes'
import { RootState } from '../Redux/Store'

const ReduxTest: NextPage = () => {
    const { name, value } = useSelector(selectCount)
    const dispatch = useDispatch()
    return (
        <div>
            <p>HZiii {name}</p>
            <h1>{value}</h1>
            <button onClick={() => dispatch(increment())} className='border p-10'>Add</button>
            <button
                onClick={() => dispatch(decrement())}
                className='border p-10'>Remove</button>
        </div>
    )
}

export default ReduxTest