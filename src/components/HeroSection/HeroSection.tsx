import React, { useEffect, useState } from 'react'

const HeroSection = () => {
  const [ isDesDisplay, setIsDesDisplay ] = useState(false);
  const [ isBtnDisplay, setIsBtnDisplay ] = useState(false);
  const [ loadDom, setLoadDom ] = useState(false);

  useEffect(() => {
    setLoadDom(true);
    const desTimeout = setTimeout(() => {
      setIsDesDisplay(true);
    }, 500)
    const disTimeout = setTimeout(() => {
      setIsBtnDisplay(true);
    }, 1000)

    return () => {
      clearTimeout(desTimeout);
      clearTimeout(disTimeout);
    }
  },[])


  return (
    <section className="flex flex-col justify-evenly 
        items-center w-[100%] sm:h-[85vh] h-[130vh]">
      <h1 className="text-[54px] font-[600] text-center animate-topTicketEntry">
        <span className="theme-text">Great Quality</span> of Code,
        <span className="theme-text">High Performance</span> App, 
        Make Your Business <span className="theme-text">Superme</span>
      </h1>

      {(loadDom && isDesDisplay) ? (
      <h3 className="text-center dark:text-[#a7a7a7] text-[#000000] animate-topTicketEntry">
        Providing you with a delightful and professional solution,
          as a full-stack developer based in Melbourne,
          focusing on building high-performance and visually appealing websites 
          that impress all customers and users with attention to detail and a 
          strong collaborative mindset. Please click {"'"}contact me{"'"} if you are interested.
      </h3>) : (
      <div className='md:h-[90px]'/>
      )}

      {(loadDom && isBtnDisplay) ? (
      <div className="flex justify-between gap-4 animate-topTicketEntry">
        <button 
        className="btn btn-active btn-primary text-[white]
        border-none bg-high-light hover:bg-[#5984bd] font-[700] text-[16px]">
          Contact Me
        </button>
        <button 
        className="btn btn-active btn-secondary text-[white] px-4
        border-none bg-[black] hover:bg-[#000000dc] font-[700] text-[16px]">
          My Blog
        </button>
      </div>
      ): (<div className='md:h-[48px]'/>)}

      { (isDesDisplay && isBtnDisplay) ? (
      <div className="flex justify-center animate-bounceText
      text-[#818181] text-center">
        Let{'\''}s See What{'\''}s Next by Drag or Click it
      </div>
      ) : (<div className='h-[30px]'/>)}
    </section>

  )
}

export default HeroSection