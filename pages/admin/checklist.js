/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link'
import { MdHome, MdOutlineBookmarkAdded } from 'react-icons/md'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { TbCheckbox } from 'react-icons/tb'
import { ImLink } from 'react-icons/im'
import { CiLogout } from 'react-icons/ci'
import { useRouter } from 'next/router'

import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useRef } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useAuth } from '../../context/AuthContext'


import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'


let usama2;
let usama3;



function checklist() {
  const [items, setItems] = useState([])
  const [data,setData] = useState([])
  


 
  
  const [text, setText] = useState('')

  

  const router = useRouter()
  if (router.isFallback) {
    return (
      <h3>Loading...</h3>
    )


  }
  const sideBarRef = useRef()
  const { logout } = useAuth()

  const fetchList = async () => {
    await axios.get("http://localhost:5000/api/checklists").then((res) => {
      setItems(res.data.reverse());
      // setChange(res.data.reverse())
      
    });
  };


  const deleteList = (id) => {
    axios.delete(`http://localhost:5000/api/checklists/${id}`).then((res) => {
      fetchList()
      //setItems(res.data);
      console.log('-- res.data --', res.data)
    })

  }

  const updateList = (id) => {
    //const text = e.target.value


    // axios.put(`http://localhost:5000/api/checklists/${id}`,  {"text": change} )
    //   .then(res => console.log({"text": change})).catch((err)=>{console.log(err)});


    axios({
      method: "put",
      url: `http://localhost:5000/api/checklists/${id._id}`,
     
    })
    fetchList()
  }


  useEffect(() => {
    fetchList();
    console.log("fetchList activate");

  }, []);


  const handleSubmit = event => {
    event.preventDefault();



    axios.post(`http://localhost:5000/api/checklists`, { text })
      .then(res => {
        fetchList()
        console.log(res);
        console.log(res.data);
      })




  }








  {/*async function deleteList(id){
      const res = await fetch(`http://localhost:5000/api/checklists/${id}`,{
        method: "DELETE"
      })
     
     const res2 = await res.json()
     console.log(res2)
     
    }*/}


















  const [openModal, setOpenModal] = useState(false)
  const [open, setOpen] = useState(false)

  function toogleSideBar() {
    sideBarRef.current.classList.toggle('-translate-x-full')
  }

  function closemodal() {
    setOpenModal(false)
  }

  function close(){
    setOpen(false)
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

  const notify = () => toast.success('checklist deleted!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",

  });

  const added = () => toast.success('checklist added!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });








  function isActive(route) {
    if (route == router.pathname) {
      return "active"
    } else {
      return ""
    }

  }

  return (
    <>
      <div className="max-h-screen md:sticky md:top-0 z-50 text-white">
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
                  <a className="text-white  hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">

                    <MdHome className='mr-1 text-white' />
                    Dashboard
                  </a>
                </Link>
                <Link href='/admin/companies' legacyBehavior>
                  <a className="text-white  hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">

                    <HiBuildingOffice2 className='mr-1 text-white' />
                    Companies
                  </a>
                </Link>
                <div className={` ${isActive('/admin/checklist')} bg-lime-500 hover:bg-lime-500 group flex items-center px-2 py-2 text-sm font-medium rounded-md `}>

                  <TbCheckbox className='mr-1 text-white' />
                  <h3 className="text-base text-white group-hover:text-white ">
                    <Link href='/admin/checklist'>
                      Check list
                    </Link>
                  </h3>
                </div>


                <Link href='/admin/links' legacyBehavior>
                  <a className="text-white  hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">

                    <ImLink className='mr-1 text-white' />
                    Links
                  </a>
                </Link>




              </nav>

              <div className="flex flex-shrink-0 border-t border-lime-500 p-4">

                <div className="flex items-center">
                  <div className='bg-lime-500 h-9 w-9 rounded-full'>
                    <button onClick={signOut}><CiLogout className=" ml-2 mt-3 text-white " /></button>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white group-hover:text-white " >Log Out</p>
                    {/*<p className="text-xs font-medium text-white group-hover:text-gray-700">(you will be loged out of your account)</p>*/}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


      <Modal show={openModal} onHide={closemodal}>
        < Modal.Body closeModal>
          <div className="flex  flex-col justify-center md:px-56 md:text-center md:py-24 py-12 sm:px-6 lg:px-8">


            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <button className='float-right -mt-8' onClick={() => closemodal(false)}>x</button>
                <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>

                  <div>

                    <div className="mt-1">
                      <input

                        name="text"
                        type="text"
                        value={text}

                        placeholder='add checklist...'
                        className="block w-full appearance-none rounded-md border border-gray-300 px-8 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                  </div>








                  <div>


                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                      onClick={closemodal}

                    >
                      Add
                    </button>





                  </div>
                </form>


              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/*update*/}

      <Modal show={open} onHide={close}>
        < Modal.Body close>
          <div className="flex  flex-col justify-center md:px-56 md:text-center md:py-24 py-12 sm:px-6 lg:px-8">


            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <button className='float-right -mt-8' onClick={() => close(false)}>x</button>
                <form className="space-y-6" onSubmit={(e) => updateList(e)}>

                  <div>

                    <div className="mt-1">
                      <input

                        name="text"
                        type="text"
                        value={data}

                        placeholder='add checklist...'
                        className="block w-full appearance-none rounded-md border border-gray-300 px-8 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                        onChange={(e) => setData(e.target.value)}
                      />
                    </div>
                  </div>








                  <div>


                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                      onClick={close}

                    >
                     Update
                    </button>





                  </div>
                </form>


              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="flex flex-1 flex-col md:pl-64">

        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {/*<h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>*/}
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

              <div className="py-4">
                {/*<div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>*/}
              </div>

              {!openModal && <div className="px-4 sm:px-6 py-4 sm:py-6 lg:px-8 lg:py-8 rounded-lg bg-gray-100">
                <div className="sm:flex sm:items-center  ">
                  <div className="sm:flex-auto ">
                    <h1 className="text-xl font-semibold text-gray-900">List of all the companies</h1>
                    <p className="mt-2 text-sm text-gray-700">
                      These are the list of all the companies listed with BIOCo Tech
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                      type="button"
                      onClick={() => { setOpenModal(true) }}
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 text-white hover:bg-cyan-700 px-4 py-2 text-xs font-medium  shadow-sm  focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2  sm:w-auto"
                    >
                      Add new daily checklist item
                    </button>

                  </div>
                </div>
              </div>}
              {!openModal && <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-lime-500">
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  text-white sm:pl-6">
                              List of Checklists
                            </th>


                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-left text-white">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-lime-50">
                          {items.map((list) => (

                            <tr key={list.text}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-light text-gray-500 sm:pl-6 contentEditable:outline-none">
                                {list.text}

                               {
                                /*
                               } <input type="text" value={list.text} onChange={(e) => {
                                  setChange(e.target.value)
                               } />*/ }
                              </td>

                              <td className=" flex relative whitespace-nowrap py-7  pl-4 pr-3 text-black  text-sm font-thin sm:pr-6">
                                {/*<CiEdit className='cursor-pointer' onClick={() => {
                                  updateList(list._id);
                                  // items.target.value = "";

                                }} />*/}
                               {
                                <Link href={`/update`}>
                                <CiEdit onClick={()=>{
                                  usama2 = list._id;
                                  usama3 = list.text;
                                }} />
                                </Link>
                               }
                                {<RiDeleteBin5Line className='ml-2 cursor-pointer' onClick={() => { deleteList(list._id), notify() }} />}
                                <ToastContainer />

                              </td>
                              {console.log(list._id)}
                            </tr>



                          ))}
                        </tbody>
                      </table>


                    </div>
                  </div>
                </div>
              </div>}

            </div>


          </div>
        </main>
      </div>



      


    </>
  )
}

export { usama2, usama3 };
export default checklist





