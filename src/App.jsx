// import React from 'react'
import Bio from './components/Bio'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Footer from "./components/Footer";
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import ContactForm from './components/ContactForm';
import SocialBoxes from './components/SocialBoxes';

const App = () => {
  return (
    <div className='relative h-full overflow-y-auto antialiased'>
      <div className=' inset-0 bg-fixed bg-cover bg-center bg-img'>
        <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
        
          <Navbar />
          <SocialBoxes />
          <Hero />
          <Project />
         <Bio />
         <Skills />
         <WorkExperience />
         <Education />
         <ContactForm />
         <Footer />
        </div>
      </div>
    </div>
  )
}

export default App