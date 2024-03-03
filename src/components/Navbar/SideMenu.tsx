import { useDropDownNav } from '@/contexts'
import React from 'react'
import { IconBtnSet } from '@/components';

interface SideMenuProps {
  Navigators: React.ReactNode
}

const SideMenu = ({
  Navigators
}: SideMenuProps) => {
  const { setOpenNav } = useDropDownNav();

  return (
    <>
      <div 
      onClick={() => setOpenNav(false)}
      className='fixed left-0 top-0 w-[100vw]
       h-[100vh] opacity-20 transition-all
       bg-[#fffff]
      dark:bg-[#000000] z-[2000000]'
      ></div>
      <aside className='fixed left-0 top-0 w-[60vw] h-[100vh] 
      dark:bg-bg-[#ffffff] z-[300000] animate-menuIn origin-left-to-right
      bg-bg-dark text-[#ffffff] flex flex-col justify-evenly gap-9 items-center'>
        <div className='w-[100px]'>
          <IconBtnSet/>
        </div>
        { Navigators }
      </aside>
    </>
  )
}

export default SideMenu