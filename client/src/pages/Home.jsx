import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'
import home1 from '../assets/images/home1.jpg'
import home2 from '../assets/images/home2.jpg'
import home3 from '../assets/images/home3.jpg'
import home4 from '../assets/images/home4.jpg'
import home5 from '../assets/images/home5.jpg'
import home6 from '../assets/images/home6.jpg'
import home7 from '../assets/images/home7.jpg'
export default function Home() {
  let slides=[home1,home2,home3,home4,home5,home6,home7];
  return (
    <div className='p-10 max-w-6xl mx-auto'>
      <div>
        <h1 className='text-7xl font-semibold p-3 text-emerald-700 max-[400px]:text-6xl'>Welcome <span className='text-emerald-500'>Home!</span></h1>
        <p className='p-3 text-justify text-zinc-500 text-xl max-[400px]:text-sm'>
        At <span className='font-semibold'>PropertyProvision</span>, we believe that finding your dream property or optimizing your real estate investments should be a seamless and enjoyable experience. 
        Whether you're a homebuyer, seller, investor, or someone seeking property management services, we're thrilled to welcome you to our platform.
        </p>
        <Link to={'/booking'}>
          <button className='border bg-emerald-700 rounded-lg p-5 m-3 text-white uppercase hover:opacity-95 disabled:opacity-80 max-[400px]:p-3 '>Explore Us</button>
        </Link>
      </div>
      <div className="max-w-4xl max-md:max-w-sm max-sm:max-w-xs m-auto pt-5">
        <ImageSlider slides={slides}/>  
      </div> 
    </div>
  )
}
