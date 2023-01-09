/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import { TbCheckbox } from 'react-icons/tb'
import { ImLink } from 'react-icons/im'
import { MdHome } from 'react-icons/md'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { CiLogout } from 'react-icons/ci'
import { useRouter } from 'next/router'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useRef } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'

function links() {
  const router = useRouter()
  const sideBarRef = useRef()
  const { logout } = useAuth()
  const [terms, setTerms] = useState('')
  const [policy, setPolicy] = useState('')
  const [faq, setFaq] = useState('')
  const [term, setTerm] = useState('')
  const [privacy, setPrivacy] = useState('')
  const [fa, setFa] = useState('')
  const [items,setItems] = useState([])
  console.log(terms, term, policy, privacy, fa)

  if (router.isFallback) {
    return (
      <h3>Loading...</h3>
    )


  }

  {/*axios.post(`http://localhost:5000//api/company-policy`, { })
    .then(res => {
      fetchList()
      console.log(res);
      console.log(res.data);
    })*/}

    const deleteList = (id) => {
      axios.delete(`http://localhost:5000/api/company-policy/${id}`).then((res) => {
        
        //setItems(res.data);
        console.log('-- res.data --', res.data)
      })
  
    }


  function toogleSideBar() {
    sideBarRef.current.classList.toggle('-translate-x-full')
  }

  async function signOut() {
    try {
      await logout()
      router.push('/login')
    }
    catch {
      console.log("error occured")
    }

  }

  function isActive(route) {
    if (route == router.pathname) {
      return "active"
    } else {
      return ""
    }

  }
  return (
    <>
      <div className="max-h-screen md:sticky  md:top-0 z-50 text-white">
        {/* MOBILE SIDEBAR */}
        <div className="bg-cyan-600 md:hidden flex justify-between p-2 items-center sticky top-0 z-30">
          <img className="h-8 w-auto" src="/logo.png" alt="Your Company" />
          <button

            className="rounded focus:bg-cyan-600"
            onClick={toogleSideBar}
          >
            <RxHamburgerMenu size={32} />
          </button>
        </div>
        <div>
          {/* MAIN SIDEBAR */}
          <div
            ref={sideBarRef}
            className="bg-cyan-600  w-56 space-y-10 px-5 py-7  absolute inset-y-0 left-0 transform -translate-x-full
         md:translate-x-0 z-50 transition duration-200 ease-in-out flex flex-col child:transition-all md:max-h-screen md:min-h-screen  md:top-0"
          >
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img className="h-8 w-auto" src="/logo.png" alt="Your Company" />
              </div>

              <nav className="mt-5 flex-1 space-y-1 bg-cyan-600 px-2">
                {/*<div className={`${isActive('/admin/dashboard')} hover:bg-lime-500 text-white  group flex items-center px-2 py-2 text-sm font-medium rounded-md`}>
                <Link href='/admin/dashboard' >
                  

                    <MdHome className='mr-1 text-white' />
                    Dashboard
                 
                </Link></div>*/}
                <Link href='/' legacyBehavior>
                  <a className="text-white font-abc  hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">

                    <MdHome className='mr-1 text-white' />
                    Dashboard
                  </a>
                </Link>
                <Link href='/admin/companies' legacyBehavior>
                  <a className="text-white font-abc hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">

                    <HiBuildingOffice2 className='mr-1 text-white' />
                    Companies
                  </a>
                </Link>



                <Link href='/admin/checklist' legacyBehavior>
                  <a className="text-white font-abc  hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">

                    <TbCheckbox className='mr-1 text-white' />
                    Check list
                  </a>
                </Link>

                <div className={` ${isActive('/admin/links')} bg-lime-500 hover:bg-lime-500 group flex items-center px-2 py-2 text-sm font-abc font-medium rounded-md `}>

                  <ImLink className='mr-1 text-white' />
                  <h3 className="text-base text-white group-hover:text-white ">
                    <Link href='/admin/links'>
                      Links
                    </Link>
                  </h3>
                </div>


              </nav>

              <div className="flex flex-shrink-0 border-t border-lime-500 p-4">

                <div className="flex items-center">
                  <div className='bg-lime-500 h-9 w-9 font-abc rounded-full'>
                    <button onClick={signOut}><CiLogout className=" ml-2 mt-3 text-white " /></button>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-abc font-medium text-white group-hover:text-white " >Log Out</p>
                    {/*<p className="text-xs font-medium text-white group-hover:text-gray-700">(you will be loged out of your account)</p>*/}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='flex flex-1 flex-col md:pl-64 '>


        {/*<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <div className='px-4 ml-5 sm:px-0'>
            <dt className="text-sm font-medium text-black">Companies</dt>
            <dt className='text-xs '>Attach PDF files.The files  you will attach will appear for the companies</dt></div>
            <dd className="mt-1 text-sm text-gray-900 ml-56  sm:col-span-2 sm:mt-0">
             
              <ul role="list" className="divide-y mt-2 mb-6 divide-white px-48 rounded-md border border-white">
                
                <li className="flex items-center justify-between  py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0  flex-1 items-center">
                   
                    <span className="ml-2 w-0 flex-1  truncate">resume_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex flex-shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md  font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Update
                    </button>
                    <span className="text-gray-300" aria-hidden="true">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md  font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              
              </ul>

              <label className='mt-2'>Terms & Conditions</label>
              <ul role="list" className="divide-y mt-2 mb-6 divide-white px-48 rounded-md border border-white">
                
                <li className="flex items-center justify-between  py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0  flex-1 items-center">
                    
                    <span className="ml-2 w-0 flex-1  truncate">resume_back_end_developer.pdf</span>
                   
                    
                  </div>
                  <div className="ml-4 flex flex-shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md  font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Update
                    </button>
                    <span className="text-gray-300" aria-hidden="true">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md  font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              
              </ul>

              <label className=''>FAQs</label>
              <ul role="list" className="divide-y mt-2 divide-white px-48 rounded-md border border-white">
                
                <li className="flex items-center justify-between  py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0  flex-1 items-center">
                   
                    <span className="ml-2 w-0 flex-1  truncate">resume_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex flex-shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md  font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Update
                    </button>
                    <span className="text-gray-300" aria-hidden="true">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md  font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              
              </ul>
            </dd>
        </div>*/}
        <div className="overflow-hidden bg-gray-100 ml-5 mt-5 mr-5 shadow sm:rounded-lg">

          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">




              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-black font-abc">Companies</dt>

                <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
                  {items.map(()=>{
                    
                  })}
                  <label className='flex font-abc '>Privacy Policy</label>
                  <ul role="list" className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white">
                    <li className="flex items-center justify-between p-2 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <input className='px-5 outline-none ' value={policy} onChange={(e) => setPolicy(e.target.value)} />
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none font-abc focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                        >
                          Update
                        </button>
                        <span className="text-gray-300 ml-1 font-abc" aria-hidden="true">
                          |
                        </span>
                        <button
                        onClick={() => { deleteList(list_id)}}
                          type="button"
                          className="rounded-md bg-white ml-1 font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-abc focus:ring-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  </ul>

                  <label className='flex mt-4 font-abc'>Terms & Conditions</label>
                  <ul role="list" className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white">
                    <li className="flex items-center justify-between p-2 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                       <input className='px-5 outline-none' value={terms} onChange={(e) => setTerms(e.target.value)} />

                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-abc focus:ring-offset-2"
                        >
                          Update
                        </button>
                        <span className="text-gray-300 ml-1 font-abc" aria-hidden="true">
                          |
                        </span>
                        <button
                          type="button"
                          className="rounded-md bg-white ml-1 font-abc font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  </ul>

                  <label className='flex mt-4 font-abc'>FAQs</label>
                  <ul role="list" className="divide-y  divide-white mt-2 p-0 rounded-md border bg-white border-white">
                    <li className="flex items-center justify-between p-2 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <input className='px-5 outline-none' value={faq} onChange={(e) => setFaq(e.target.value)} />
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded-md bg-white font-thin font-abc text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                        >
                          Update
                        </button>
                        <span className="text-gray-300 ml-1" aria-hidden="true">
                          |
                        </span>
                        <button
                          type="button"
                          className="rounded-md bg-white ml-1 font-abc font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </li>


                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className='flex flex-1 flex-col md:pl-64 '>
        <div className="overflow-hidden bg-gray-100 ml-5 mt-5 mr-5 shadow sm:rounded-lg">

          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">




              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-black font-abc">Staff</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
                  <label className='flex font-abc '>Privacy Policy</label>
                  <ul role="list" className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white">
                    <li className="flex items-center justify-between p-2 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <input className='px-5 outline-none' value={privacy} onChange={(e) => setPrivacy(e.target.value)} />
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 font-abc"
                        >
                          Update
                        </button>
                        <span className="text-gray-300 ml-1" aria-hidden="true">
                          |
                        </span>
                        <button
                          type="button"
                          className="rounded-md bg-white ml-1 font-abc font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  </ul>

                  <label className='flex mt-4 font-abc'>Terms & Conditions</label>
                  <ul role="list" className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white">
                    <li className="flex items-center justify-between p-2 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <input className='px-5 outline-none' value={term} onChange={(e) => setTerm(e.target.value)} />
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded-md bg-white font-abc font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none "
                        >
                          Update
                        </button>
                        <span className="text-gray-300 ml-1" aria-hidden="true">
                          |
                        </span>
                        <button
                          type="button"
                          className="rounded-md font-abc bg-white ml-1 font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none "
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  </ul>

                  <label className='flex mt-4 font-abc'>FAQs</label>
                  <ul role="list" className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white">
                    <li className="flex items-center justify-between p-2 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <input className='px-5 outline-none' value={fa} onChange={(e) => setFa(e.target.value)} />
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 font-abc"
                        >
                          Update
                        </button>
                        <span className="text-gray-300 ml-1" aria-hidden="true">
                          |
                        </span>
                        <button
                          type="button"
                          className="rounded-md bg-white font-abc ml-1 font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </li>


                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>




    </>
  )
}

export default links