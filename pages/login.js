/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/20/solid'
import { FaRegUser } from 'react-icons/fa'
import { FiKey } from 'react-icons/fi'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'





function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoggingIn, setIsLoggingIn] = useState(true)
  const router = useRouter()

  {/*function login(e){
    e.preventDefault()
     console.log(email,password)
  }*/}



  const { login, currentUser,  } = useAuth()

  async function submitHandler() {
    try {
      if (!email || !password) {
        setError('Please enter email and password')
        return
      }
      await login(email, password)

      router.push('/')
      console.log('hello')
    }
    catch(e) {
      console.log(e.message)
    }

  }

 

  return (
    <>
      <div >
        <div className=' flex flex-col justify-center items-center'>

          <div className='mt-56'>
            <img className="h-24 w-64" src="/login.png" alt="Your Company" />

          </div>


          <div className="relative mt-1 rounded-md shadow-sm">
            {/*<div className='bg-cyan-600 rounded-lg w-64 p-2 flex items-center mb-3'>
              <div className='flex justify-between'>
                <className='text-white mr-2' />
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Admin Email' className=' bg-cyan-600 rounded-lg text-white outline-none text-sm flex-1 ' required />
              </div>
  </div>*/}
  <div>
     
      <div className="relative mt-1 bg-cyan-600 rounded-lg w-64 p-2 mb-3 shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <FaRegUser  className=" text-white" />
        </div>
        <input
          type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Admin Email'
          className="block w-full bg-cyan-600  text-white rounded-md outline-none pl-10 placeholder:text-white sm:text-sm"
          
        />
      </div>
    </div>

    <div className="relative mt-1 bg-cyan-600 rounded-lg w-64 p-2 mb-3 shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <FiKey  className=" text-white" />
        </div>
        <input
          type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'
          className="block w-full bg-cyan-600  text-white rounded-md outline-none pl-10 placeholder:text-white sm:text-sm"
          
        />
      </div>

            {/*<div className='bg-cyan-600 rounded-lg w-64 p-2 flex items-center mb-3'>
              <div className='flex justify-between'>
                < className='text-white rounded-full mr-2 ' />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className=' bg-cyan-600 rounded-lg text-white outline-none text-sm flex-1 placeholder:text-white' required />
              </div>
</div>*/}



            <button className='flex w-64 p-2 justify-center  rounded-lg  bg-lime-600  text-sm font-medium text-white shadow-sm hover:bg-lime-500 
            focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2'onClick={submitHandler} >LogIn</button>
            <div className="text-xs text-right">
             <Link href='/forgotPassword' >Forgot Password</Link>
            </div>










          </div>
        </div>

      </div>
    </>
  )
}

export default Login