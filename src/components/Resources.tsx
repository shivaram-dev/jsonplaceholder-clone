import React from 'react'
import Container from './Container'
import Title from './Title'
import Link from 'next/link'

const resourcesArray = [
    {
        title: "/posts",
        total: "100 posts",
    },
    {
        title: "/comments",
        total: "500 comments",
    },
    {
        title: "/albums",
        total: "100 albums",
    },
    {
        title: "/photos",
        total: "5000 photos",
    },
    {
        title: "/todos",
        total: "200 todos",
    },
    {
        title: "/users",
        total: "10 users",
    },
    
]

const Resources = () => {
  return (
    <Container>
        <Title title="Resources" />
        <p className='my-5 text-sm'>
            JSONPlaceholder comes with a set of 6 common resources:
        </p>
        <div className='my-5 flex flex-col gap-y-2 '>
            {resourcesArray?.map((item) => (
                <div key={item?.title} className='flex items-center w-72 justify-between'>
                    <Link href={item?.title} className='underline'>
                        {item?.title}
                    </Link>
                    <p className='text-left w-32'>{item?.total}</p>
                </div>
            ))}
        </div>
        <p className='text-sm tracking-wide'>
            <span className='font-bold'>Note</span>: resources have relations.
            example: posts have many comments, albums have many photos, ... see
            <span className='underline'>guide</span> for the full list.
        </p>
    </Container>
  )
}

export default Resources