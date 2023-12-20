import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const { currentUser } = useSelector(state => state.user)
    return (
        <header className='bg-emerald-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-xl flex'>
                        <span className='text-emerald-500'>Property</span>
                        <span className='text-emerald-700'>Provision</span>
                    </h1>
                </Link>
                <form action="" className='bg-emerald-100 p-3 rounded-lg hidden sm:inline'>
                    <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FontAwesomeIcon icon={faSearch} className='cursor-progress' />
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden md:inline text-emerald-700 hover:text-emerald-400 cursor-pointer'>Home</li>
                    </Link>
                    <Link to='/booking'>
                        <li className='hidden md:inline text-emerald-700 hover:text-emerald-400 cursor-pointer'>Booking</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden md:inline text-emerald-700 hover:text-emerald-400 cursor-pointer'>About</li>
                    </Link>
                    <Link to='/profile'>
                        {currentUser ? (<img src={currentUser.avatar} alt='profile' className='rounded-full object-cover h-9 w-9'/>) : (<li className=' text-emerald-700 hover:text-emerald-400 cursor-pointer'>SignIn</li>)}
                    </Link>
                </ul>
            </div>
        </header>
    )
}
