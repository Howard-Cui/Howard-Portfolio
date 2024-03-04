import React, { useEffect, useState } from 'react'
import { IconButton } from '../Button'
import { FiGithub } from 'react-icons/fi';
import { AiOutlineGlobal } from "react-icons/ai";
import { useInView } from 'react-intersection-observer';

interface ProjectInfoProps {
  url: string;
  githubAccess: boolean;
  githubUrl?: string;
}

const ProjectInfo = ({
  url,
  githubAccess,
  githubUrl
}: ProjectInfoProps) => {
  const { ref, inView }  = useInView();
  const [ isEnter, setIsEnter ] = useState(false);

  useEffect(() => {
    setIsEnter(true);
    console.log(inView)
  }, [inView])

  console.log("InView", inView)

  return (
    <div>
    {true ? (
      <div ref={ref} className={`w-[200px] h-[300px] flex flex-col justify-between
      shadow-md p-2 hover:bg-high-light-second rounded-lg transition-all
      ${inView ? "animate-topTicketEntry" : ""} `}>
        <iframe 
        className='w-[100%] h-[180px] scroll-[none] rounded-lg'
        scrolling="no"
        allowFullScreen
        src={url}/>
        <div className='h-[70px] flex flex-col justify-between'>
          <div className='flex gap-2 items-end '>
            <IconButton
            icon={<AiOutlineGlobal/>}
            href={url}
            onClick={() => {}}
            />
            <a 
            href={url}
            className='text-[13px] hover:underline'>
              Click here access Github
            </a>
          </div>
          {githubAccess && (<div className='flex gap-2 items-center'>
            <IconButton
            icon={<FiGithub/>}
            href={githubUrl}
            onClick={() => {}}
            />
            <a 
            href={githubUrl}
            className='text-[13px] hover:underline'>
              Click here access Website
            </a>
          </div>)}
        </div>
      </div>) : <div className='w-[200px] h-[300px]'/>
    }
  </div>
  )
}

const ProjectSection = () => {
  const projectInfoList: ProjectInfoProps[] = [
    {
      url: "https://www.courtcanva.com/",
      githubAccess: false,
      githubUrl: ''
    },
    {
      url: "https://taotify-website.vercel.app",
      githubAccess: true,
      githubUrl: 'https://github.com/taodemy/taotify-website'
    },
    {
      url: "https://www.radetecdiagnostics.com/",
      githubAccess: true,
      githubUrl: 'https://github.com/Radetec-diagnositc/Radetec-app'
    },
    {
      url: "https://howard-portfolio.vercel.app/",
      githubAccess: true,
      githubUrl: 'https://github.com/Howard-Cui/Howard-Portfolio'
    }
  ]


  return (
    <section className='mt-[300px] flex flex-col gap-4'>
      <div className='flex md:flex-row flex-col gap-2 justify-between'>
        <h3 className='relative bottom-4 w-[400px] font-bold text-[40px]'>Projects that are public</h3>
        <p className='w-[500px] max-w-[95vw] text-[20px] dark:text-[#a7a7a7] text-[#000000]'>
          I have done plenty of projects, however, some of them are not
          public due to privacy issue, there are some projects that can 
          displayed publicly
        </p>
      </div>

      <div className="
      grid md:grid-cols-4 sm:grid-cols-2 items-center justify-items-between justify-items-center
       w-[100%] min-h-[300px] md:gap-0 gap-6">
        {
          projectInfoList.map(item => (
            <ProjectInfo
            key={item.url}
            url={item.url}
            githubAccess={item.githubAccess}
            githubUrl={item.githubUrl}
            />
          ))
        }
       </div>
    </section>
  )
}

export default ProjectSection