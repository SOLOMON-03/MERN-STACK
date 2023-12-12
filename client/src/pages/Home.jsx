import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='p-10 max-w-6xl mx-auto flex flex-row'>
      <div>
        <h1 className='text-7xl font-semibold p-3 text-emerald-700'>Welcome <span className='text-emerald-500'>Home!</span></h1>
        <p className='p-3 text-justify text-zinc-500 text-xl'>
        At <span className='font-semibold'>PropertyProvision</span>, we believe that finding your dream property or optimizing your real estate investments should be a seamless and enjoyable experience. 
        Whether you're a homebuyer, seller, investor, or someone seeking property management services, we're thrilled to welcome you to our platform.
        </p>
        <Link to={'/booking'}>
          <button className='border bg-emerald-700 rounded-lg p-5 m-3 text-white uppercase hover:opacity-95 disabled:opacity-80'>Explore Us</button>
        </Link>
      </div>
      <div id='animation-carousel' className='relative w-full' data-carousel='static'>
        <div className='hidden duration-200 ease-linear' sata-carousel-item>
          <img src="" alt="..." className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
        </div>
      </div>
    </div>
  )
}
