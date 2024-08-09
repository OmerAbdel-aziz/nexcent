import React from 'react'
import Button from '../sub-components/Button'

const CTS = () => {
  return (
    <section className='flex flex-col gap-10 w-full max-container p-4 lg:p-0 justify-center items-center'>
      <h1 className='mt-10 font-montserrat text-gray-d text-4xl xl:text-8xl leading-tight xl:leading-[96px] font-semibold'>
      Pellentesque suscipit fringilla libero eu.
      </h1>
      <Button label='Get a Demo' />
    </section>
  )
}

export default CTS