import React from 'react'

const Title = ({title}: {title: string}) => {
  return (
    <div>
        <p className='text-3xl'>{title}</p>
    </div>
  )
}

export default Title