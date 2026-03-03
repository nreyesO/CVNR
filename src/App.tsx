import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";

export type ContactInfo = {
  name: string;
  title: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  email: string;
  skills: string[];
};

export type EducationItem = {
  id: number;
  school: string;
  location: string;
  degree: string;
  period: string;
  notes: string[];
};

export type ExperienceItem = {
  id: number;
  company: string;
  location: string;
  jobTitle: string;
  period: string;
  achievements: string[];
  skillsUsed: string[];
};

function App() {
  const contactInfo: ContactInfo = {
    name: "Nora Azucena Reyes Ortiz",
    title: "Project Manager",
    addressLine1: "11, Coral",
    addressLine2: "Colima City, CP 28014",
    phone: "(312) 101-1010",
    email: "nreyes9003@gmail.com",
    skills: [
      "PYTHON",
      "JavaScript",
      "Front",
      "Power BI",
      
    ],
  };

  const educationList: EducationItem[] = [
    {
      id: 1,
      school: "ICEP",
      location: "Colima City",
      degree: "SYSTEMS ENGINEERING",
      period: "2024- ",
      notes: ["currently studying"],
    },
    {
  
      id: 2,
      school: "Universidad de Colima",
      location: "Colima City",
      degree: "Master's degree in internet technologies",
      period: "2025-",
      notes: ["currently studying"],
    },
    {

      id: 3,
      school: "Tecnológico de Colima",
      location: "Colima City",
      degree: "Bachelor's Degree in Administration",
      period: "2000-2004",
      notes: ["Completed my Business Administration degree ahead of schedule"],
    },
  ];

  const experienceList: ExperienceItem[] = [
    {
      id: 1,
      company: "Century 21",
      location: "Manzanillo, Col.",
      jobTitle: "Sales Manager",
      period: "January 2021- December 2023",
      achievements: [
        "Increased annual sales by 25%",
        "Successfully managed a sales team",    
      ],
      skillsUsed: ["Forecasting and budgeting, KPI tracking & reporting, Negotiation and closing deals"],
    },
    {
      id: 2,
      company: "Century 21",
      location: "Tijuana, B.C.",
      jobTitle: "Sales executive",
      period: "January 2016-June 2020",
      achievements: ["Top 50 in sales nationally every year and top 10 in the western region"],
      skillsUsed: ["Negotiation & closing deals, Account management Y CRM software proficiency"],
    },
  ];

  return (
    <div className="cv">
      <Contact info={contactInfo} />
      <Education items={educationList} />
      <Experience items={experienceList} />
    </div>
  );
}

export default App;