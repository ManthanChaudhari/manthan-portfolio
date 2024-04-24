import React from 'react'
import Button from './Reusable/Button'

function Header() {
  return (
    <div className='shadow-lg flex justify-end px-5 py-3 bg-white'>
      {/* <nav>
        <ul className='flex gap-x-5 bg-white'>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </nav> */}
      <div className='flex gap-x-4'>
      <Button text='Linkedin' className='bg-blue-500 text-white' link='https://www.linkedin.com/in/manthan-chaudhari-8a6854254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'/>
      <Button text='Github' className='bg-[#3c3c3c] text-white' link='https://github.com/ManthanChaudhari'/>
      <Button text='Contact Me' className='bg-red-500 text-white' link='mailto:chaudharimanthan05@gmail.com'/>
      </div>
    </div>
  )
}

export default Header
