import Layout from "@/Layout";
import { CareerExperience, HeroSection, TechStack } from "@/components";

export default function Home() {

  return (
    <div className={`bg-bg-light dark:bg-bg-dark w-[100%]
    min-h-[1130vh] flex justify-center text-light-text-main  
    dark:text-dark-text-main`}>
      <Layout>
        <HeroSection/>
        <TechStack/>
        <CareerExperience/>
      </Layout>
    </div> 
  );
}
