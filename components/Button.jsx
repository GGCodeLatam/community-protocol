import React from 'react'

const Button = ({children}) => {
  return (
    <div className= 'bg-cyan-500 w-fit p-2 m-5 rounded-md drop-shadow-2xl'>
        {children}
    </div>
  )
}

export default Button