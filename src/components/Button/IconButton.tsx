import React from 'react'

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: React.MouseEventHandler;
  className?: string
}

const IconButton = ({
  icon,
  className,
  onClick
}: IconButtonProps) => {
  return (
    <button 
    onClick={onClick}
    className={`w-[30px] h-[30px] flex justify-center active:scale-[95%]
    items-center rounded-md hover:bg-[#635e5e] hover:opacity-75 ${className}`}>
      {icon}
    </button>
  )
}

export default IconButton