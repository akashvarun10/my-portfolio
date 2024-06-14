import { useState } from 'react';
import { Grid, Typography, Button, Modal, IconButton, useTheme } from '@mui/material';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const theme = useTheme();

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const services = [
    {
      title: 'Machine Learning Engineer',
      description: 'Expertise in developing machine learning models and algorithms.',
      points: [
        'Data preprocessing and analysis',
        'Model training and evaluation',
        'Deploying machine learning models'
      ]
    },
    {
      title: 'Data Scientist',
      description: 'Experienced in extracting insights from data to drive business decisions.',
      points: [
        'Statistical analysis and modeling',
        'Data visualization',
        'Machine learning algorithms'
      ]
    },
    {
      title: 'DevOps and Cloud Engineer',
      description: 'Skilled in automating and managing infrastructure using cloud services.',
      points: [
        'Continuous integration and deployment',
        'Infrastructure as code',
        'Cloud platform administration'
      ]
    },
    {
      title: 'Full Stack Web Development Engineer',
      description: 'Proficient in developing scalable and responsive web applications.',
      points: [
        'Frontend and backend development',
        'Database management',
        'API integration'
      ]
    },
    {
      title: 'Software Development Engineer',
      description: 'Skilled in developing high-quality software applications.',
      points: [
        'Software design and architecture',
        'Coding and debugging',
        'Version control systems'
      ]
    },
    {
      title: 'Data Analyst',
      description: 'Analytical skills in interpreting complex data and generating insights.',
      points: [
        'Data cleaning and transformation',
        'Statistical analysis',
        'Data visualization techniques'
      ]
    }
  ];

  return (
    <section id="services" style={{ margin: '0 20%' }}>
      <Typography variant="h3" align="center" gutterBottom color='#76885B'>Services</Typography>
      <Typography variant="subtitle2" align="center" gutterBottom color='#76885B'>Create + Collaborate</Typography>

      <Grid container spacing={2} justifyContent="center">
        {services.map((service, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3} style={{ maxWidth: '350px', margin: '20px' }}>
            <Grid container direction="column" alignItems="center" spacing={1} style={{
              padding: '16px',
              background: 'var(--container-color)',
              borderRadius: '1rem',
              transition: 'transform 0.2s ease-in-out',
              border: '1px solid #ddd',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}>
              <HiOutlineClipboardList style={{ fontSize: '1.5rem', color: 'var(--title-color)' }} />
              <Typography variant="h4" align="center" style={{ fontSize: '1.2rem' }}>{service.title}</Typography>
              <Button variant="text"
                onClick={() => toggleTab(index + 1)}
                style={{
                  color: '#76885B',
                  borderRadius: '1rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#5b6d45'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#76885B'}
              >
                View More
                <HiOutlineArrowSmRight style={{ fontSize: '1rem' }} />
              </Button>
            </Grid>
            <Modal open={toggleState === index + 1} onClose={() => toggleTab(0)}>
              <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={8} md={6}>
                  <Grid container direction="column" alignItems="center" spacing={2} style={{
                    padding: '24px',
                    borderRadius: '1.5rem',
                    border: '1px solid #ddd',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
                    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                  }}>
                    <IconButton onClick={() => toggleTab(0)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                      <HiX style={{ fontSize: '1.5rem', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }} />
                    </IconButton>
                    <Typography variant="h4" align="center">{service.title}</Typography>
                    <Typography variant="body2" align="center" style={{ marginBottom: '16px' }}>
                      {service.description}
                    </Typography>
                    <Grid container direction="column" alignItems="flex-start" spacing={1}>
                      {service.points.map((point, index) => (
                        <Grid key={index} item>
                          <Grid container alignItems="center" spacing={1}>
                            <HiOutlineCheckCircle style={{ fontSize: '1rem', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }} />
                            <Typography variant="body2">{point}</Typography>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Modal>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Services;
