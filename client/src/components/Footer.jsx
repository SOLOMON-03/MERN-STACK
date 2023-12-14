import React from 'react'
import { Link } from 'react-router-dom'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
return (
    <footer className='bg-emerald-200 shadow-md'>
        <div className='flex flex-wrap justify-around items-start max-w-6xl mx-auto p-3 '>
            <div>
                <form action="" className='rounded-lg flex flex-col gap-4'>
                    <h1 className='font-bold text-xl text-emerald-700'>Queries:</h1>
                    <input type="text" placeholder='Username' className='bg-emerald-100 rounded-lg focus:outline-none w-auto p-2' id='username'/>
                    <input type="email" placeholder='Email' className='bg-emerald-100 rounded-lg focus:outline-none w-auto p-2' id='email1'/>
                    <textarea className='bg-emerald-100 rounded-lg focus:outline-none w-auto overflow-auto p-3' placeholder='Description' id="description" cols="10" rows="3"></textarea>
                    <button className='border bg-emerald-700 rounded-lg p-2 text-white uppercase hover:opacity-95 disabled:opacity-80'>Send</button>
                </form>
            </div>
            
            <div>
                <h1 className='font-bold text-xl text-emerald-700 '>Quick Links:</h1>
                <ul className='flex flex-col gap-4 p-3'>
                    <Link to='/'>
                        <li className='text-emerald-700 hover:underline cursor-pointer'>Home</li>
                    </Link>
                    <Link to='/booking'>
                        <li className='text-emerald-700 hover:underline cursor-pointer'>Booking</li>
                    </Link>
                    <Link to='/about'>
                        <li className='text-emerald-700 hover:underline cursor-pointer'>About</li>
                    </Link>
                </ul>
            </div>
            <div className='flex flex-col'>
                <Link to='/'>
                    <h1 className='font-bold text-xl'>
                        <span className='text-emerald-500 '>Property</span>
                        <span className='text-emerald-700'>Provision</span>
                    </h1>
                </Link>
                <p className='p-3 text-emerald-700'>
                    <FontAwesomeIcon icon={faPhone} />
                    <span className='px-2'>+91 9360849334</span>
                </p>
                <p className='p-3 text-emerald-700'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span className='px-2'>solomon172003@gmail.com</span>
                </p>
            </div>
        </div>
        <footer className='bg-emerald-700 text-center text-sm text-emerald-100'>
            <p>&copy; Copyright from 2023</p>
        </footer>
    </footer>
)
}
