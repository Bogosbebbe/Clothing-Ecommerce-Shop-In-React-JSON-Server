import React from 'react'

const SectionTitle = ({title, path}) => {
  return (
    <div className='section-title-div border-b py-10 border-gray-600'>
        <h1 className='section-title-title text-8xl text-center mb-10 max-md:text-7xl max-sm:text-6xl text-accent-content'>{ title }</h1>
        <p className='section-title-path text-2xl text-center max-sm:text-xl text-accent-content'>{ path }</p>
    </div>
  )
}

export default SectionTitle