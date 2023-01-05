import React from 'react'
import stats from './StatsData'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

 

function Stats() {
return (
  <div>
  <h2 className="text-sm font-medium text-gray-500">Waste managed</h2>
  <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
    {stats.map((project) => (
      <li key={project.name} className="col-span-1   flex rounded-md shadow-sm">
        <div
          className={
            
          
            `flex-shrink-0 flex items-center justify-center w-16   text-white text-sm font-medium rounded-l-md`
          }
        >
        {project.icon}
        </div>
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <p className='text-gray-500'>{project.name}</p>
           
            <p className="text-black font-medium">{project.stat} metric tones</p>
          </div>
         
        </div>
      </li>
    ))}
  </ul>
</div>
  )
}

export default Stats