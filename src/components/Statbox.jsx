import React from 'react'

const Statbox = ({amount, type}) => {
  return (
    <div className='min-w-[200px] text-white bg-sky-500 flex justify-center items-center flex-col gap-4 p-2 rounded-lg'>
        <h2 className='font-bold text-3xl'>${amount}</h2>
        <p className='font-bold text-lg'>{type}</p>
    </div>
  )
}

export default Statbox;