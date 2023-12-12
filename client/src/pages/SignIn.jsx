import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='p-3 max-w-lg mx-auto mb-10'>
      <h1 className='text-center font-semibold text-3xl my-7'>Sign In</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="email" placeholder='Email' className='border p-3 rounded-lg' id='email'/>
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id='password'/>
        <button className='border bg-emerald-700 rounded-lg p-3 text-white uppercase hover:opacity-95 disabled:opacity-80'>Sign In</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Create an account?</p>
        <Link to={'/sign-up'}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
    </div>
  )
}
