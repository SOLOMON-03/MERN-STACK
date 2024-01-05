import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const { currentUser } = useSelector(state => state.user)
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);
    return (
        <header className='bg-emerald-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-xl flex'>
                        <span className='text-emerald-500'>Property</span>
                        <span className='text-emerald-700'>Provision</span>
                    </h1>
                </Link>
                <form action="" className='bg-emerald-100 p-3 rounded-lg hidden sm:inline' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:w-64' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>
                    <FontAwesomeIcon icon={faSearch} className='cursor-progress' />
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden md:inline text-emerald-700 hover:text-emerald-400 cursor-pointer'>Home</li>
                    </Link>
                    <Link to='/search'>
                        <li className='hidden md:inline text-emerald-700 hover:text-emerald-400 cursor-pointer'>Booking</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden md:inline text-emerald-700 hover:text-emerald-400 cursor-pointer'>About</li>
                    </Link>
                    <Link to='/profile'>
                        {currentUser ? (<img src={currentUser.avatar} alt='profile' className='rounded-full object-cover h-9 w-9' />) : (<li className=' text-emerald-700 hover:text-emerald-400 cursor-pointer'>SignIn</li>)}
                    </Link>
                </ul>
            </div>
        </header>
    )
}
