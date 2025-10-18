import React from 'react'
import Container from './Container'
import Title from './Title'
import Link from 'next/link'

const routesArray = [
    {
        href: "/posts",
        method: "GET",
    },
    {
        href: "/posts/1",
        method: "GET",
    },
    {
        href: "/posts/1/comments",
        method: "GET",
    },
    {
        href: "/comments?postId=1",
        method: "GET",
    },
    {
        href: "/posts",
        method: "POST",
    },
    {
        href: "/posts/1",
        method: "PUT",
    },
    {
        href: "/posts/1",
        method: "PATCH",
    },
    {
        href: "/posts/1",
        method: "DELETE",
    },
]
 
const Routes = () => {
  return (
    <Container>
        <Title title="Routes" />
        <p className='my-5 text-sm'>
            All HTTP methods are supported. You can use http or https for your requests.
        </p>
        <div className='my-5 flex flex-col gap-y-2'>
            {routesArray.map((item) => (
                <div key={`${item?.href}${item?.method}`} className='flex items-center w-72 justify-between'>
                    <p>{item?.method}</p>
                    <Link href={item?.href} className='text-left w-40 underline'>
                    {item?.href}
                    </Link>
                </div>
            ))}
        </div>
    </Container>
  )
}

export default Routes