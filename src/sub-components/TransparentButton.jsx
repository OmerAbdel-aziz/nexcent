import React from 'react'

const TransparentButton = ({label}) => {
  return (
    <button  className='bg-transparent hover:bg-tint1 active:bg-tint2
    text-primary flex flex-wrap py-2 px-4 sm:py-3 sm:px-5 justify-center 
    gap-2 sm:gap-3 font-montserrat text-base sm:text-lg items-center rounded'>
       {label}
   </button>
  )
}

export default TransparentButton