import React, { useEffect, useState } from 'react'
// import { Navbar } from '@/components'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("@/components")
.then(module => module.Navbar), { ssr: false })



const Layout = ({ children } : { children : React.ReactNode }) => {
  const [navColorChanged, setNavColorChanged] = useState(false);

  useEffect(() => {
    const scrollNavHandler = () => {
      if (window.scrollY >= 70) {
        setNavColorChanged(true);
        // alert("1")
      } else {
        setNavColorChanged(false);
      }
    }
    window.addEventListener("scroll", scrollNavHandler);

    return () => {
      window.removeEventListener("scroll", scrollNavHandler);
    }
  })

  return (
    <div className='flex flex-col gap-6 setted-width text-[20px]'>
      <div className={`flex justify-center fixed left-0 top-0 w-[100vw] 
      dark:bg-bg-dark bg-bg-light ${navColorChanged ? "opacity-95" : ""} z-[10000]`}>
        <Navbar/>
      </div>
      <div className='h-[70px]'/>
      { children }
    </div>
  )
}

export default Layout