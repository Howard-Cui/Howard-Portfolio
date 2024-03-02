import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link'
import { IconButton, IconBtnSet } from '@/components';
import { GiHamburgerMenu } from "react-icons/gi";
import { useDropDownNav } from '@/contexts';
import { IoClose } from "react-icons/io5";
import SideMenu from './SideMenu';

const Navbar = () => {
  const navList = [
    { title: "Home", route: '#' },
    { title: "Blog", route: '#' },
    { title: "About", route: '#' },
    { title: "Contact Me", route: '#' },
  ]

  const Navigators = () => navList.map(item => {
    return (
      <li
      className='hover:text-high-light hover:border-high-light-second
      border-b-[2px] border-b-[transparent] z-[1000] list-none font-[500]
      active:scale-[90%]'
      key={item.title}>
        <Link href={item.route}>{item.title}</Link>
      </li>
    )
  })

  const { openNav, setOpenNav } = useDropDownNav();
  const needBurgurMenu = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const handleOnClickBurger = () => setOpenNav(!openNav);

  return (
    <nav className='w-[100%] h-[70px] flex justify-between items-center mt-9'>
        <h1 className='font-bold text-[25px] first-letter:text-high-light-second'>
          Howard Cui
        </h1>

        {
          needBurgurMenu ? 
          <IconButton 
          className="z-[1000]"
          icon={!openNav ? 
          <GiHamburgerMenu size={"large"}/> 
          : <IoClose size={"large"}/>} 
          onClick={handleOnClickBurger}/>
          : (
          <>
            <ul className='flex justify-between gap-8 font-[500]'>
              {
                <Navigators/>
              }
              < IconBtnSet/>

            </ul>
          </>)
        }
        
        {openNav && needBurgurMenu && (
          <SideMenu Navigators={<Navigators/>}/>
        )}
      </nav>
  )
}

export default Navbar