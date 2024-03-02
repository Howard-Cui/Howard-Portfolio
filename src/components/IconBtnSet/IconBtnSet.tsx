import React from 'react'
import { IconButton } from '../Button'
import { useDarkTheme } from '@/contexts';
import { FiGithub, FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

const IconBtnSet = () => {
  const { darkMode, setDarkMode } = useDarkTheme();

  const handleOnClickMoon = () => setDarkMode(!darkMode);
  
  return (
    <ul className='flex justify-between gap-3'>
      <li className='hover:text-white'>
        <IconButton onClick={handleOnClickMoon} 
        icon={darkMode ? 
          <FiSun color='#b3b3b3'/> : 
          <FaMoon color='#b3b3b3'/>}/>
      </li>
      <li>
        <IconButton
        onClick={() => {}}
        icon={<RiLinkedinFill color='#b3b3b3'/>}/>
      </li>
      <li>
        <IconButton 
        onClick={() => {}}
        // eslint-disable-next-line react/jsx-no-undef
        icon={<FiGithub color='#b3b3b3'/>}/>
      </li>
    </ul>
  )
}

export default IconBtnSet