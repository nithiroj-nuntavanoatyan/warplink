import React from 'react'
import Link from 'next/link'
function Navbar() {
    return (
        <nav className='bg-[#4b69b7] h-auto w-full sticky top-0 z-50'>
            <div className='flex justify-between items-center h-auto px-3 py-4 relative'>
                <div className="title flex justify-center items-center text-2xl md:text-4xl font-black text-[#e9f6f4] uppercase p-2">
                <Link href="/">Warpyoonai 😭</Link>
                    
                </div>
                <ul className="nav-items text-lg md:text-2xl font-bold text-[#e9f6f4] xl:flex uppercase  ">
                   <li><Link href="/pages/home"><span className='flex items-center xl:p-3'>Home</span></Link></li>
                   {/* <li><Link href="/pages/category"><span className='flex items-center xl:p-3'>Category</span></Link></li> */}
                   <li><Link href="/pages/addwarp"><span className='flex items-center xl:p-3'>Addwarp</span></Link></li>
                   <li><Link href="/pages/search"><span className='flex items-center xl:p-3'>Search</span></Link></li>
                   
                </ul>
            </div>
        </nav>

    )
}

export default Navbar