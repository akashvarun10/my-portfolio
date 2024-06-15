import React from 'react';
import { Typography } from '@mui/material';
import { HiOutlineBriefcase, HiAcademicCap, HiOutlineUsers } from 'react-icons/hi';
import styled, { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { ThemeContext } from '../theme/ThemeContext';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  logo: string;
}

interface Education {
  title: string;
  institution: string;
  duration: string;
  description: string[];
  logo: string;
}

interface Leadership {
  title: string;
  organization: string;
  duration: string;
  description: string[];
  logo: string;
}

const ExperienceContainer = styled('section')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.background.default};

  @media (min-width: 1400px) {
    flex-wrap: nowrap;
  }
`;

const ExperienceCard = styled('div')`
  flex: 1 1 100%;
  padding: 1.5rem;
  margin: 20px;
  border-left: 2px solid #76885B;
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 400px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1400px) {
    width: 100%;
    height: auto;
  }
`;

const Logo = styled('img')`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;

const Experience: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('Experience must be used within a ThemeProvider');
  }

  const { mode } = themeContext;

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const educations: Education[] = [
    {
      title: "Master's in Information Systems",
      institution: 'Northeastern University, Boston, MA',
      duration: 'Expected 2025',
      description: [
        'Relevant Coursework: Data Science Engineering Methods and Toolbox, Advances in Data Science/Architecture, 	Parallel Machine Learning & AI, Neural Modeling Methods & Tool,Web Design and User Experience, Application Engineering Development.',
      ],
      logo: 'neu',
    },
    {
      title: "Bachelor's in Computer Science and Engineering",
      institution: 'SRM University, Chennai, India',
      duration: '2019 - 2023',
      description: [
        'Relevant Coursework: Data Structures and Algorithms, Artificial Intelligence, Natural Language Processing, Database Management, Object Oriented Programming, Data Mining, Network Routing and Algorithms, Network Security.',
      ],
      logo: 'srm',
    },
  ];

  const experiences: Experience[] = [
    {
      title: 'Product Development Intern',
      company: 'Airdonex, Chennai, India',
      duration: 'Jun 2021 - Nov 2021',
      description: [
        'Led the integration of ML APIs (Google Cloud Vision, TensorFlow) & ML Techniques in product development of UTM and navigation of UAVs, significantly enhancing airspace management efficiency and safety of drones.',
        'Developed and implemented scalable machine learning model deployment, leveraging AWS for cloud-based solutions and integrating key Machine Learning APIs, significantly enhancing product features.',
      ],
      logo: 'airdonex',
    },
    {
      title: 'Data Science Intern',
      company: 'MedTourEasy, Delhi, India',
      duration: 'Jan 2021 - Feb 2021',
      description: [
        'Achieved breakthroughs in data visualization and exploratory analysis, significantly advancing the understanding of fitness trends and used Scikit-Learn for predictive modeling, leading to enhanced insights into fitness trends.',
        'Developed and applied a Python-based data analysis and EDA pipeline to enhance data driven decision-making.',
      ],
      logo: 'medtoureasy',
    },
  ];

  const leaderships: Leadership[] = [
    {
      title: 'COMPUTER VISION LEAD',
      organization: 'Student Copter Research Organization',
      duration: 'Jun 2021 - Nov 2021',
      description: [
        'Lead the team [ Computer Vision Domain]. Worked on Introducing new domains to the club. Hosted regular team discussions and worked on Projects weekly.',
        'Apart from Computer Vision model training introduced the team to FastAPI, and Docker made them all learn to deploy the models. Also Gathered free resources to learn various tech stacks. Likewise Introducing each other to Personal Branding (LinkedIn Github )',
      ],
      logo: 'scro',
    },
    {
      title: 'COMPUTER VISION ASSOCIATE',
      organization: 'Student Copter Research Organization',
      duration: 'Sep 2020 - Jun 2021',
      description: [
        'Initially as part of a Research-based development team in the Computer Vision field later worked on research in the NLP field & Drone-based Computer Vision applications.',
        'Developed Face Recognition for the entire team & Object detection for drones and also Worked on several projects, was part of various webinars held by the club.',
      ],
      logo: 'scro',
    },
  ];

  const renderCard = (title: string, company: string, duration: string, description: string[], logo: string) => (
    <ExperienceCard>
      <Typography variant="h4" align="left" sx={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <Logo src={`src/assets/seals/${logo}.png`} alt={title} />
        <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>{title}</span>
      </Typography>
      <Typography variant="h5" align="left" sx={{ fontSize: '14px', backgroundColor: 'rgba(118, 136, 91, 0.5)', padding: '5px 15px', display: 'inline-block', fontWeight: 600, marginBottom: '10px' }}>
        {company}
      </Typography>
      <Typography variant="h4" align="left" sx={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '10px' }}>
        <span style={{ float: 'right' }}>
          {duration}
        </span>
      </Typography>
      <ul>
        {description.map((desc, index) => (
          <li key={index}>
            <Typography variant="body2" align="left" sx={{ marginBottom: '10px' }}>
              • {desc}
            </Typography>
          </li>
        ))}
      </ul>
    </ExperienceCard>
  );

  return (
    <ThemeProvider theme={theme}>
      <section>
        <Typography variant="h2" align="center" gutterBottom color="#76885B" sx={{ fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2rem' }}>
          Resume
        </Typography>
        <ExperienceContainer id="resume">
          <div style={{ flex: '1 1 100%' }}>
            <Typography variant="h4" align="center" sx={{ fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              <HiAcademicCap />
              Education
            </Typography>
            {educations.map(education => (
              <div key={education.title}>
                {renderCard(
                  education.title,
                  education.institution,
                  education.duration,
                  education.description,
                  education.logo
                )}
              </div>
            ))}
          </div>

          <div style={{ flex: '1 1 100%' }}>
            <Typography variant="h4" align="center" sx={{ fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              <HiOutlineBriefcase />
              Experience
            </Typography>
            {experiences.map(experience => (
              <div key={experience.title}>
                {renderCard(
                  experience.title,
                  experience.company,
                  experience.duration,
                  experience.description,
                  experience.logo
                )}
              </div>
            ))}
          </div>

          <div style={{ flex: '1 1 100%' }}>
            <Typography variant="h2" align="center" sx={{ fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              <HiOutlineUsers />
              Leadership & Volunteer
            </Typography>
            {leaderships.map(leadership => (
              <div key={leadership.title}>
                {renderCard(
                  leadership.title,
                  leadership.organization,
                  leadership.duration,
                  leadership.description,
                  leadership.logo
                )}
              </div>
            ))}
          </div>
        </ExperienceContainer>
      </section>
    </ThemeProvider>
  );
};

export default Experience;