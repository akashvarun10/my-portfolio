import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, styled, Autocomplete } from '@mui/material';
import { GitHub, Visibility, ArrowBack, ArrowForward } from '@mui/icons-material';
import Navbar from '../components/Navbar';

interface Project {
  title: string;
  description: string;
  category: string;
  github: string;
  demo?: string;
  images: string[];
}

const ProjectContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: theme.spacing(4),
}));

const ProjectCard = styled(Box)(({ theme }) => ({
  width: '350px',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  margin: theme.spacing(1), // Add margin here
  background: 'var(--container-color)',
  borderRadius: '1rem',
  transition: 'transform 0.2s ease-in-out',
  border: '1px solid #ddd',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    '& .description': {
      whiteSpace: 'normal',
      overflow: 'visible',
    },
  },
}));

const ProjectDescription = styled(Typography)(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  transition: 'white-space 0.2s ease-in-out, overflow 0.2s ease-in-out',
}));

const ArrowButton = styled(Button)(() => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: '#76885B',
  color: '#fff',
  minWidth: 'auto',
  padding: '8px',
  zIndex: 1000, // Ensure the arrow button is on top
  '&:hover': {
    backgroundColor: '#5c6e4b',
  },
}));

const ScrollContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap', // Use wrap instead of nowrap
  justifyContent: 'center', // Center the cards
  overflowX: 'auto',
  maxWidth: '100%',
  position: 'relative',
}));

const Project: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL);
      if (response.ok) {
        const data = await response.json();
        setProjectsData(data);
      } else {
        console.error('Failed to fetch projects');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0); // Reset the current index to 0
  };

  const filteredProjects = projectsData.filter(
    (project) =>
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === '' || project.category === selectedCategory)
  );

  const handleScrollLeft = () => {
    console.log('Scroll Left');
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => {
        console.log('Updating index from', prevIndex, 'to', prevIndex - 1);
        return prevIndex - 1;
      });
    }
  };

  const handleScrollRight = () => {
    console.log('Scroll Right');
    if (currentIndex < Math.floor(filteredProjects.length / 9)) {
      setCurrentIndex((prevIndex) => {
        console.log('Updating index from', prevIndex, 'to', prevIndex + 1);
        return prevIndex + 1;
      });
    }
  };

  const visibleProjects = filteredProjects.slice(currentIndex * 9, currentIndex * 9 + 9);

  return (
    <>
      <Navbar />
      <ProjectContainer id="projects">
        <Typography variant="h3" align="center" gutterBottom color={'#76885B'}>
          Projects
        </Typography>
        <Typography variant="subtitle2" align="center" gutterBottom color={'#76885B'}>
          Academic & Personal Projects
        </Typography>

        <Autocomplete
          freeSolo
          disableClearable
          value={searchTerm}
          onChange={(_, value) => setSearchTerm(value)}
          options={projectsData.map((project) => project.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Projects"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ marginBottom: '16px', width: '300px' }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#76885B',
                  },
                },
                '& .MuiInputLabel-root': {
                  '&.Mui-focused': {
                    color: '#76885B',
                  },
                },
              }}
            />
          )}
        />
        <Box marginBottom="16px">
          <Button
            variant={selectedCategory === '' ? 'contained' : 'outlined'}
            onClick={() => handleCategoryFilter('')}
            style={{
              marginRight: '8px',
              backgroundColor: selectedCategory === '' ? '#76885B' : 'transparent',
              color: selectedCategory === '' ? '#fff' : '#76885B',
              borderRadius: '20px',
              border: '1px solid #76885B',
              padding: '5px 15px',
              textTransform: 'none',
            }}
          >
            All
          </Button>
          {['Data Science', 'Machine Learning/AI', 'Web Development', 'Cloud & DevOps', 'Freelance'].map(
            (category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'contained' : 'outlined'}
                onClick={() => handleCategoryFilter(category)}
                style={{
                  marginRight: '8px',
                  backgroundColor: selectedCategory === category ? '#76885B' : 'transparent',
                  color: selectedCategory === category ? '#fff' : '#76885B',
                  borderRadius: '20px',
                  border: '1px solid #76885B',
                  padding: '5px 15px',
                  textTransform: 'none',
                }}
              >
                {category}
              </Button>
            )
          )}
        </Box>

        <Box position="relative" width="100%">
          {currentIndex > 0 && (
            <ArrowButton style={{ left: '16px' }} onClick={handleScrollLeft}>
              <ArrowBack />
            </ArrowButton>
          )}
          <ScrollContainer>
            <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={index}>
                  <Typography variant="h6" align="center" style={{ fontSize: '18px', color: '#76885B' }}>
                    {project.title}
                  </Typography>
                  <ProjectDescription variant="body2" align="center" className="description">
                    {project.description}
                  </ProjectDescription>
                  {project.images && project.images.length > 0 && (
                    <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" marginTop="8px">
                      {project.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={`/src/assets/${image}`}
                          alt={image}
                          style={{ height: '30px', margin: '5px' }}
                        />
                      ))}
                    </Box>
                  )}
                  <Box
                    display="flex"
                    justifyContent={project.demo ? 'space-between' : 'center'}
                    width="100%"
                    marginTop="16px"
                  >
                    <Button
                      variant="text"
                      size="small"
                      startIcon={<GitHub />}
                      style={{
                        color: '#76885B',
                      
                      }}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Typography style={{ color: '#76885B', fontSize: '14px' }}>GitHub</Typography>
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        variant="text"
                        size="small"
                        startIcon={<Visibility />}
                        style={{
                          color: '#76885B',
                         
                        }}
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Typography style={{ color: '#76885B', fontSize: '14px' }}>Live Demo</Typography>
                        </a>
                      </Button>
                    )}
                  </Box>
                </ProjectCard>
              ))}
            </Box>
          </ScrollContainer>
          {currentIndex < Math.floor(filteredProjects.length / 9) && (
            <ArrowButton style={{ right: '16px' }} onClick={handleScrollRight}>
              <ArrowForward />
            </ArrowButton>
          )}
        </Box>
      </ProjectContainer>
    </>
  );
};

export default Project;