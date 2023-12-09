import React from 'react'

const Header = ({title, subtitle, dashboard=false}) => {
  return (
    <div className='flex flex-col gap-2 pt-2'>
        <h1 className='text-4xl font-bold'>{dashboard ? `Welcome to your ${title}` : `Your ${title}`}</h1>
        <p className='font-light text-base'>{subtitle}</p>
    </div>
  )
}

export default Header;