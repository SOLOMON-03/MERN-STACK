import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Header() {
return (
    <header className='bg-emerald-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
                <span className='text-emerald-500'>Property</span>
                <span className='text-emerald-700'>Provision</span>
            </h1>
            </Link>
            <form action="" className='bg-emerald-100 p-3 rounded-lg'>
                <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FontAwesomeIcon icon={faSearch} />
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-emerald-700 hover:underline cursor-pointer'>Home</li>
                </Link>
                <Link to='/booking'>
                    <li className='hidden sm:inline text-emerald-700 hover:underline cursor-pointer'>Booking</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline text-emerald-700 hover:underline cursor-pointer'>About</li>
                </Link>
                <Link to='/sign-in'>
                    <li className=' text-emerald-700 hover:underline cursor-pointer'>SignIn</li>
                </Link>
            </ul>
        </div>
    </header>
)
}
