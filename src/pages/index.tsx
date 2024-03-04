import Layout from "@/Layout";
import { 
  HeroSection, 
  CareerExperience, 
  ProjectSection, 
  TechStack, 
  Aside, 
  Navigators } from "@/components";
import { useDropDownNav } from "@/contexts";
import dynamic from "next/dynamic";

// const CareerExperience = dynamic(() => import("@/components").then(module => module.CareerExperience), {ssr: false})
// const ProjectSection = dynamic(() => import("@/components").then(module => module.ProjectSection), {ssr: false});
// const TechStack = dynamic(() => import("@/components").then(module => module.TechStack), {ssr: true})

export default function Home() {
  const { openNav } = useDropDownNav();

  return (
    <div className={`bg-bg-light dark:bg-bg-dark w-[100%]
     flex justify-center text-light-text-main 
    dark:text-dark-text-main`}>
      <Layout>
        <HeroSection/>
        <TechStack/>
        <CareerExperience/>
        <ProjectSection/>
        {openNav && <Aside Navigators={<Navigators/>}/>}
      </Layout>
    </div> 
  );
}
