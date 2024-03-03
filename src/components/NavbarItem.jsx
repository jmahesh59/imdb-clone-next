'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function NavbarItem({title , param}) {
    
    const searchParam = useSearchParams();
    const genre = searchParam.get("genre")

  return (
    <div>
        <Link
            href={`/?genre=${param}`}
            className={`hover:text-amber-500  font-semibold ${genre===param ? 'underline underline-offset-8 decoration-3 decoration-amber-500 rounded-lg':"" }`}
        >
            {title}
        </Link>
    </div>
  )
}

export default NavbarItem
