import React from 'react'

import {TbPlant} from 'react-icons/tb'
import {MdLandscape} from 'react-icons/md'
import {MdRecycling} from 'react-icons/md'


 

function Stats() {
return (
  <div>
  <h2 className="text-sm font-medium text-gray-500 font-abc">Waste managed</h2>
  <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
    
      <li  className="col-span-1   flex rounded-md shadow-sm">
        <div
          className={
            
          
            `flex-shrink-0 flex items-center justify-center w-16 bg-lime-500 text-white text-sm font-medium rounded-l-md`
          }
        >
          <TbPlant className='text-3xl'/>
      
        </div>
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <p className='text-gray-500'>Organic waste</p>
           
            <p className="text-black font-medium">15,000  metric tones</p>
          </div>
         
        </div>
      </li>
    


      <li className="col-span-1   flex rounded-md shadow-sm">
        <div
          className={
            
          
            `flex-shrink-0 flex items-center justify-center w-16 bg-cyan-600  text-white text-sm font-medium rounded-l-md`
          }
        >
          <MdLandscape className='text-3xl'/>
        
        </div>
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <p className='text-gray-500'>Landfill</p>
           
            <p className="text-black font-medium">0 metric tones</p>
          </div>
         
        </div>
      </li>

      <li className="col-span-1   flex rounded-md shadow-sm">
        <div
          className={
            
          
            `flex-shrink-0 flex items-center justify-center w-16 bg-gray-400  text-white text-sm font-medium rounded-l-md`
          }
        >
         <MdRecycling className='text-3xl'/>
        
        </div>
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <p className='text-gray-500'>Recycled</p>
           
            <p className="text-black font-medium">0 metric tones</p>
          </div>
         
        </div>
      </li>
   
   
    
  </ul>
</div>
  )
}

export default Stats