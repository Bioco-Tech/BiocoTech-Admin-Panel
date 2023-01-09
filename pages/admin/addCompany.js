/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link'
import axios  from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function addCompany() {



 const [name,setName] = useState('')
  const [id,setId] = useState('')
  const [pin,setPin] = useState('')
  const [website,setWebsite] = useState('')
const [about,setAbout] = useState('')

  const router = useRouter()
    if (router.isFallback) {
      return (
        <h3>Loading...</h3>
      )
  
  
    }
    
  const notify = () => toast.success('add company!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",

  });
  
  const handleSubmit = event => {
    event.preventDefault();
    
    
   


    axios.post(`http://localhost:5000/api/companies`, {name,id,pin,website,about})
      .then(res => {
        
       
        console.log(res.data);
      })

      router.push('/admin/companies')
      




  }
  return (
    <>
      <button className="text-lg ml-5 mt-5 font-medium leading-6 text-gray-900" ><span className=' text-md'> <Link className='flex justify-center flex-row font-abc items-center' href='/admin/companies'><IoIosArrowBack />Back</Link></span></button>
      <div className='bg-gray-200 mt-2 ml-6 mr-6 mb-6 px-2 sm:px-6 py-4 sm:py-6 lg:px-4 lg:py-4 rounded-lg'>



        <div className="mt-3 sm:mt-0 ">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="">
              <div className="px-4 ml-5 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900 font-abc">New Company</h3>
                <p className="mt-1 text-sm text-gray-600 font-abc">Add the information of new company</p>
              </div>
            </div>
            <div className="mt-2  md:mt-0">

              <div className="overflow-hidden  sm:rounded-md">
                <div className=" px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 -mt-3 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="first-name" className="block font-abc text-sm mb-2 font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block border w-full p-2 rounded-md border-gray-300 shadow-sm   sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                      />
                    </div>



                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block font-abc text-sm mb-2 font-medium text-gray-700">
                        Company ID
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block border w-full p-2 rounded-md border-gray-300 shadow-sm   sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block font-abc mb-2 text-sm font-medium text-gray-700">
                        Company PIN
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={pin}
                        onChange={(e)=>setPin(e.target.value)}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md p-2   border border-gray-300 shadow-sm   sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block font-abc mb-2 text-sm font-medium text-gray-700">
                        Website/Other link(optional)
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={website}
                        onChange={(e)=>setWebsite(e.target.value)}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md   p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2   sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block font-abc mb-2 text-sm font-medium text-gray-700">
                        About/Other details(optional)
                      </label>
                      <textarea
                        rows={4}
                        name="comment"
                        value={about}
                        onChange={(e)=>setAbout(e.target.value)}
                        id="comment"
                        placeholder='  Add new unit...'
                        className="block w-full rounded-md border  p-2 border-gray-300 shadow-sm  sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 "
                       
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block font-abc mb-2 text-sm font-medium text-gray-700">
                        Attachments(optional)
                      </label>
                      <div className='flex '>
                        <button className='flex w-32 p-1 justify-center rounded-lg border border-gray-300 bg-white  text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 
                         focus:outline-none focus:ring-2 font-abc focus:ring-gray-300 focus:ring-offset-2' >Upload</button>
                        <button className='flex w-32 ml-2 p-1 justify-center border rounded-lg border-gray-300 bg-white  text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 
                         focus:outline-none focus:ring-2 font-abc focus:ring-gray-300 focus:ring-offset-2' >Upload</button>

                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <button
                        type="button"
                        onClick={(e)=>{handleSubmit(e),notify()}}
                        
                        className='flex w-full ml-2 p-2 justify-center border rounded-lg border-gray-300 bg-cyan-600 text-sm font-medium text-white shadow-sm hover:bg-cyan-500 
                      focus:outline-none focus:ring-2 font-abc focus:ring-cyan-500 focus:ring-offset-2'

                      >
                        Create and Save
                      </button><ToastContainer/>
                    </div>











                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default addCompany