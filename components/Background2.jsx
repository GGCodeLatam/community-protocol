import React from 'react'

const Background2 = ({ children }) => {
    return (
        <div className='bg-gray-800 h-screen w-full'>
            <div className='relative z-10'>
                {children}
            </div>
            <div className='blur-3xl animate-ping opacity-10 z-0 rounded-full w-1/4 h-1/4 bg-blue-900 my-5'></div>
            <div className="flex justify-center -space-x-14 animate-spin w-1/2 self-center opacity-10">
                <div className="mix-blend-multiply bg-cyan-400 w-40 h-40 rounded-full "></div>
                <div className="mix-blend-multiply bg-purple-400 w-40 h-40 rounded-full"></div>
            </div>
        </div>
    )
}

export default Background2