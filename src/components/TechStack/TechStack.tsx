import React, { ReactNode } from 'react'
import { FaReact, FaServer, FaCloud } from "react-icons/fa";
import { TbDatabaseSearch } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer';

interface TechTicketProps {
  icon?: ReactNode, 
  title: string, 
  description: string
}

export const TechTicket = ({
  icon,
  title,
  description,
} : TechTicketProps) => {
  const { ref, inView, entry } = useInView();

  return (
    <div ref={ref} className={`w-[300px] h-[160px] dark:bg-bg-dark bg-bg-light 
    shadow-sm shadow-[#00000018] dark:shadow-[#ffffff1c]
    flex flex-col justify-evenly p-3  ${inView ? "animate-topTicketEntry" : ""}`}>
      <div className='flex items-center gap-4 align-center'>
        { icon }
        <h3 className='font-bold'>{ title }</h3>
      </div>

      <p className='text-[13px] dark:text-[#a7a7a7] text-[#000000]'>
        { description }
      </p>
    </div>
  )
}

const TechStack = () => {

  const techStackInfo = [
    { 
      icon: <FaReact/>, 
      title: "Web Development",
      description: `Familiar with to build high perforamc web apps, 
      not only React, but various technologies 
      that can helps your web app amazing.`
    },
    {
      icon: <TbDatabaseSearch/>,
      title: "Databases",
      description: `Familiar with database systems knowledge, hands on
      experiences with both Relational Databases and NoSQL Databases.`
    },
    {
      icon: <FaServer/>,
      title: "Backend Development",
      description: `Familiar with various backend technologies including 
      Node.js, Springboot, Lambda Functions...`
    },
    {
      icon: <FaCloud/>,
      title: "Cloud Tools",
      description: `Familiar with modern cloud technologies and product
      such as AWS, A lot hands on experiences on AWS Lambda, Cloudfront etc.
      to reduce the cost of development.`
    },
    {
      icon: <MdOutlineManageAccounts/>,
      title: 'Agile',
      description: `Able to work under Agile management workflows.`
    },
    {
      icon: <FaLaptopCode/>,
      title: 'Clean Code',
      description: `Coding is not only about product out, but also about
      teamwork, so I put a lots of time on keep my code clean and understandable
      there fore improve the team's productivity.`
    }
  ]


  return (
    <section className="xl:h-[650px] md:h-[780px] h-[1300px]">
      <div className="absolute left-0 w-[100%] xl:h-[600px] md:h-[730px] h-[1250px] 
      dark:bg-[#3667a72f] bg-[#1758c215] pt-4 flex justify-center">
        <div className="setted-width h-[600px] flex flex-col
        justify-evenly gap-3 items-center ">

          <h2 className="font-[500] text-xl dark:text-high-light 
          text-[rgb(108,159,189)] mt-20">
            What I Can Do
          </h2>
          <h3 className="font-[700] text-5xl">
            Tech Stacks
          </h3>
          <p className="dark:text-[#a7a7a7] text-[#000000] text-center">
            Those technologies that enabled me work efficently!
          </p>

          <div className="min-h-[70%] w-[100%] grid xl:grid-cols-3
          md:grid-cols-2 grid-cols-1 justify-items-between gap-4 justify-items-center
          overflow-visible mt-11 animate-topTicketEntry">
            {
              techStackInfo.map(item => {
                return (
                  <TechTicket 
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}/>
                )
              })
            }
            

          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack