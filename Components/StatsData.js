

import {TbPlant} from 'react-icons/tb'
import {MdLandscape} from 'react-icons/md'
import {MdRecycling} from 'react-icons/md'

const stats= [
    {
        id:1,
         name:'Organic waste',
         stat:'15,000 ',
         bgColor:'bg-lime-500',
         icon:<TbPlant className='text-3xl'/>
    },
    {
        id:2,
         name:'Landfill',
         stat:'15,000 ',
         bgColor:'bg-cyan-600',
         icon:<MdLandscape className='text-3xl'/>
    },
    {
        id:3,
         name:'Recycled',
         stat:'15,000 ',
         bgColor:'bg-gray-400',
         icon:<MdRecycling className='text-3xl'/>
    }
]
export default stats