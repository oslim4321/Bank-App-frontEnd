import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen w-full bg-slate-500">
                <div className="text-9xl font-extrabold text-indigo-600">
                    <i className="fas fa-spinner fa-pulse text-8xl"></i>
                    Loading...
                </div>
            </div>
        </div>
    )
}

export default Loading