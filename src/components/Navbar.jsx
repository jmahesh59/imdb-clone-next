import React from 'react'
import NavbarItem from '@/components/NavbarItem'

function Navbar() {
  return (
    <div className='flex p-4 text-lg dark:bg-gray-600 items-center justify-center gap-9 bg-amber-100 '>
        <NavbarItem title="Trending" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar
