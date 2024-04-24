import React from 'react'

function Header() {
  return (
    <div className='shadow-lg flex justify-end px-5 py-3 bg-white'>
      <nav>
        <ul className='flex gap-x-5 bg-white'>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
