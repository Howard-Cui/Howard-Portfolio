import React from 'react'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

interface ExperienceTicketProps {
  title: string,
  date: string,
  description: string
}

export const ExperienceTicket = ({
  title,
  date,
  description,
} : ExperienceTicketProps) => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={`w-[300px] h-[160px] dark:bg-bg-dark bg-bg-light 
    shadow-sm shadow-[#00000018] dark:shadow-[#ffffff1c]
    flex flex-col justify-evenly p-3 ${inView ? "animate-topTicketEntry" : ""}`}>
      <div className='flex items-center gap-4 align-center'>
        <h3 className='font-bold'>{ title }</h3>
      </div>

      <p className='text-[13px] dark:text-[#a7a7a7] text-[#000000]'>
        { date }
      </p>

      <p className='text-[13px] dark:text-[#a7a7a7] text-[#000000]'>
        { description }
      </p>
    </div>
  )
}

const CareerExperience = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const workExperiences = [
    {
      title: "Software Engineer Intern",
      description: "Async Working Ltd Pty.",
      date: "Melbourne, VIC(Remote)"
    },
    {
      title: "Web Developer",
      description: "Radetec Diagnostic Ltd Pty.",
      date: "Melbourne, VIC"
    },
    {
      title: "Software Engineer",
      description: "Itrazo Tracetech Ltd Pty.",
      date: "Melbourne, VIC"
    }
  ]


  return (
    <div className={'flex flex-col justify-between items-center'}>
      <div className="setted-width h-[200px] flex flex-col
        justify-evenly gap-3 items-center">
          <h3 className="font-[700] text-5xl">
            Career Experiences
          </h3>
          <p className="dark:text-[#a7a7a7] text-[#000000] text-center">
            I am proud of I worked in these organizations
          </p>
        </div>
      {
        workExperiences.map((item, index) => (
          <>
          <div className={isMobile ? "relative right-[200px]" : ""} key={item.description}>
            <FaArrowAltCircleDown color='#fc5dcd'/>
            <div className={`absolute ${!isMobile && index%2 === 0 ?"translate-x-[-300px]" : "translate-x-7"}`}>
              <ExperienceTicket 
              title={item.title}
              description={item.description}
              date={item.date}
              />
            </div>
          </div>
          <div className={`${isMobile && "relative right-[200px]"} w-1 h-[200px] bg-high-light-second`}/>
          </>
        ))
      }
      <div className={isMobile ? "relative right-[200px]" : ""}>
        <FaCircleCheck color='#619cfa'/>
        <div className={`absolute translate-x-7`}>
          <ExperienceTicket 
          title={"Expecting new opportunity..."}
          description={"Let's put your organization's name here"}
          date={"Anywere Australia"}
          />
        </div>
      </div>
    </div>
  )
}

export default CareerExperience