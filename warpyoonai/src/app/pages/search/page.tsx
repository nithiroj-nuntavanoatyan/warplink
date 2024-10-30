import Searchbar from '@/components/Searchbar'
import React from 'react'

function page() {
  return (
    <div>
      <div className='items-center justify-items-center m-4'>
        <div className="headername flex justify-center items-center text-3xl md:text-6xl font-black text-[#e9f6f4] uppercase">
          ค้นหาหมวดที่ชอบ
        </div>

      </div>
      <Searchbar />
    </div>
  )
}

export default page