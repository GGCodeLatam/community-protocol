import React from 'react'

const Background = ({ children }) => {
    return (
        <div className='bg-gray-800 h-screen w-full '>
            <div className='relative z-10'>
                {children}
            </div>
            <div className='blur-3xl animate-ping opacity-10 z-0 rounded-full w-1/4 h-1/4 bg-blue-900 my-5'></div>
        </div>
    )
}

export default Background