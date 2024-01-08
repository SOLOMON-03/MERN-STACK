import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const { currentUser } = useSelector(state => state.user)
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = useState(false);
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
            <div className='md:flex justify-between items-center max-w-6xl mx-auto py-[23.5px] md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center'>
                    <Link to='/'>
                        <span className='text-emerald-500'>Property</span>
                        <span className='text-emerald-700'>Provision</span>
                    </Link>
                </div>
                <form action="" className='bg-emerald-100 p-3 rounded-lg max-md:hidden' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-40'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    <FontAwesomeIcon icon={faSearch} className='opacity-40'/>
                </form>
                <div className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden flex gap-2">
                    <Link to='/profile'>
                        {currentUser ? (<img src={currentUser.avatar} alt='profile' className='rounded-full object-cover h-9 w-9 md:mb-0 mb-6 md:mt-0 mt-2 ' />) : (<p className='md:mb-0 mb-6 md:mt-0 mt-2 text-emerald-700 hover:text-emerald-400 cursor-pointer max-md:hidden'>SignIn</p>)}
                    </Link>
                    <FontAwesomeIcon icon={open ? faXmark : faBars}
                        className='text-emerald-800  hover:text-emerald-400 mt-3'
                        onClick={() => setOpen(!open)} />
                </div>
                <ul className={`md:flex gap-4 max-md:flex-col absolute  md:static bg-emerald-200 md:z-auto z-[1]
                left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? ' flex-box z[-1] relative' : 'top-[-490px]'}`}>
                    <li className=' text-emerald-700 hover:text-emerald-400 cursor-pointer md:mt-0 mt-7 md:inline'>
                        <form action="" className='bg-emerald-100 p-1 rounded-lg md:hidden max-md:max-w-[12rem]' onSubmit={handleSubmit}>
                            <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-24 max-md:w-40'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} />
                            <FontAwesomeIcon icon={faSearch} className='cursor-progress' />
                        </form>
                    </li>
                    <Link to='/'>
                        <li className=' text-emerald-700 hover:text-emerald-400 cursor-pointer md:mt-0 mt-2'>Home</li>
                    </Link>
                    <Link to='/search'>
                        <li className=' text-emerald-700 hover:text-emerald-400 cursor-pointer md:mt-0 mt-2'>Booking</li>
                    </Link>
                    <Link to='/about'>
                        <li className=' text-emerald-700 hover:text-emerald-400 cursor-pointer md:mt-0 mt-2 mb-2'>About</li>
                    </Link>
                    <Link to='/profile'>
                        {currentUser ? (<img src={currentUser.avatar} alt='profile' className='rounded-full object-cover h-9 w-9  max-md:hidden' />) : (<li className=' text-emerald-700 hover:text-emerald-400 cursor-pointer   md:mb-0 mb-6'>SignIn</li>)}
                    </Link>
                </ul>
            </div>
        </header>
    )
}
