import { FC, useContext, useState } from 'react'
import SideNav from './SideNav'
import SideBar from './SideBar'
import { Menu } from 'lucide-react'
import { ListContext } from '../listContext'

const Navbar = () => {
  const [isOpenSidebar, setIsOpenSidebar ] = useState(false)
    const {editOpen} = useContext(ListContext);


  return <div className='bg-black h-20 border-solid border-b-4 text-white text-2xl font-semibold border-gray'>
      <SideNav isOpen={isOpenSidebar} onClose={setIsOpenSidebar} />
      <div className='flex justify-between h-full mx-2 items-center'>
        <div className='flex'>
      <button onClick={()=>setIsOpenSidebar(true)}><Menu size={40} /></button>
        <span className='ml-[250px] hover:bg-slate-900 cursor-pointer p-2 transition-all text-[18px] font-semibold border-b-2 translate-y-2 border-blue-500'>Section</span>
      </div>
      <div className='w-[210px] h-[40px] bg-[#191b20] flex items-center justify-between p-[13px] rounded-[12px]'>
        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.1449 10.4163H16.0928C14.605 10.4156 13.3991 9.4518 13.3982 8.26186C13.3982 7.07192 14.605 6.10815 16.0928 6.10742H20.1449" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.551 8.2125H16.2391" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.24077 1.29364H14.8921C17.793 1.29364 20.1446 3.17449 20.1446 5.49454V11.2399C20.1446 13.56 17.793 15.4408 14.8921 15.4408H6.24077C3.33995 15.4408 0.988281 13.56 0.988281 11.2399V5.49454C0.988281 3.17449 3.33995 1.29364 6.24077 1.29364Z" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span className='text-[16px] font-medium ml-[6.6px] mr-[16px]'>0.2 $XYZ</span>
<div className='w-[51px] h-[23px] bg-blue-300 text-center rounded-[5px] text-[12px] text-blue-500 flex items-center justify-center'>Tier 1</div>
      </div>
      </div>
      <SideBar isOpen={editOpen} />
    </div>
}

export default Navbar