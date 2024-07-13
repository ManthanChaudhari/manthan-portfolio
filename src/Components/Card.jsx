import React from 'react'
import Button from './Reusable/Button'

function Card({projectImage , projectTitle , description , link,techstack,text}) {
    return (
      <div className="relative flex flex-col ring-2 ring-gray-100 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl" >
    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-40 lg:h-72">
      <img
        src={projectImage}
        alt="card-image" className="object-contain w-full h-full cursor-pointer"
         />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
          {projectTitle}
        </p>
      </div>
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
        {description}
      </p>
      <p className='text-black'>
        {techstack}
      </p>
    </div>
    <div className="p-6 pt-0">  
      <Button text={`${text || 'Live Link'}`} className='bg-blue-500 text-white' link={link} />
    </div>
  </div>
    )
  }
  
  export default Card
  
