import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import { useRouter } from 'next/router'
// import {closemodal} from '../pages/admin/checklist'

function Addlist({ closemodal, fetchList}) {
    const [text, setText] = useState('')
    const [isUpdate,setIsUpdate] = useState()
    const router= useRouter()
    console.log(fetchList)

    console.log(closemodal)
    {/*const handleSubmit = async ()=>{
        e.preventDefault()
        console.log(text)
        {/*try {
             const res = await fetch('http://localhost:5000/api/checklists',{
            method:'POST',
            headers:{
                'Content-Type':'Application/json'
            },
            body:JSON.stringify({
                text,
            })
        })
        const res2 = res.json()
        console.log(res2)
        } catch (error) {
            console.log(error)
            
        }
       
    }*/}

    const updateList = ()=>{
  
  
        axios.put(`http://localhost:5000/api/checklists/${_id}`)
        .then(res => console.log(res.data));
    }

   const handleSubmit = event => {
        event.preventDefault();
    
        
    
        axios.post(`http://localhost:5000/api/checklists`, { text })
          .then(res => {
            fetchList
            console.log(res);
            console.log(res.data);
          })
          

         
         
      }

      

      
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
            
            < Modal.Body closeModal>
                <div className="flex  flex-col justify-center md:px-56 md:text-center md:py-24 py-12 sm:px-6 lg:px-8">


                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                             <button className='float-right -mt-8' onClick={() => closemodal(false)}>x</button> 
                            <form className="space-y-6" onSubmit={(e)=>handleSubmit(e)}>
                                <div>

                                    <div className="mt-1">
                                        <input
                                           
                                            name="text"
                                            type="text"
                                            value={text}
                                           
                                            placeholder='add checklist...'
                                            className="block w-full appearance-none rounded-md border border-gray-300 px-8 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                                            onChange={(e)=>setText(e.target.value)}
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
        </>
    )
}

export default Addlist