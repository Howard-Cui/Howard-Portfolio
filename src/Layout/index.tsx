import React from 'react'
import { Navbar } from '@/components'

const Layout = ({ children } : { children : React.ReactNode }) => {

  return (
    <div className='flex flex-col gap-6 setted-width text-[20px]'>
      <Navbar/>
      { children }
    </div>
  )
}

export default Layout