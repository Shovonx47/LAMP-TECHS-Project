
import React from 'react';
import Header from './components/Header/Header';
import ProgramOverview from './components/ProgramOverview/ProgramOverview';
import ProgramDetails from './components/ProgramDetails/ProgramDetails';
import RegistrationSection from './components/RegistrationSection/RegistrationSection';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

const programDetails = {
  title: "Software Development",
  description: "This program offers a comprehensive overview of the subject matter, designed to equip participants with essential skills and knowledge.",
  duration: "3 months",
  location: "Online",
  deadline: "July 31, 2024",
  bannerImage: "/banner.jpg",
  details: {
    description: "The program is structured to provide an in-depth understanding of the key concepts. It includes various modules that cover theoretical and practical aspects.",
    objectives: ["Understand the fundamental principles", "Develop practical skills", "Apply knowledge to real-world scenarios"],
    benefits: ["Gain valuable insights", "Enhance your skillset", "Receive a certification upon completion"],
    requirements: ["Complete all assignments", "Participate in discussions", "Pass the final assessment"],
  },
  relatedPrograms: [
    { id: 1, title: "Advanced Techniques in Data Science" },
    { id: 2, title: "Beginner's Guide to Python Programming" },
    { id: 3, title: "Expert Level Training in Web Development" },
    { id: 4, title: "Advanced Machine Learning Algorithms" },
    { id: 5, title: "Professional Certification in Digital Marketing" },
    { id: 6, title: "Intermediate Java Programming Course" },
    { id: 7, title: "Mastering UX/UI Design Principles" },
    { id: 8, title: "Advanced Business Analytics Strategies" },
    { id: 9, title: "Cloud Computing Fundamentals" },
    { id: 10, title: "Cybersecurity Essentials Workshop" },
  ],
  
  resources: ["Reference Book", "Online Articles", "Tutorial Videos"],
};

const isLoggedIn = true;
const registrationStatus = "You are successfully registered for this program. You can start accessing the course materials from the dashboard.";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <div className="container mx-auto flex flex-wrap">
          <main className="flex-grow p-4 lg:w-3/4">
            <ProgramOverview
              title={programDetails.title}
              description={programDetails.description}
              duration={programDetails.duration}
              location={programDetails.location}
              deadline={programDetails.deadline}
              bannerImage={programDetails.bannerImage}
            />
            <ProgramDetails details={programDetails.details} />
            <RegistrationSection isLoggedIn={isLoggedIn} registrationStatus={registrationStatus} />
          </main>
          <aside className="p-4 w-full lg:w-1/4">
            <Sidebar relatedPrograms={programDetails.relatedPrograms} resources={programDetails.resources} />
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
