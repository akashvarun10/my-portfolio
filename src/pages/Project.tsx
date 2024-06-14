// // import React, { useState, useEffect } from 'react';
// // import { Box, TextField, Button, Typography, styled, Autocomplete } from '@mui/material';
// // import { GitHub, Visibility } from '@mui/icons-material';
// // import Navbar from '../components/Navbar';

// // interface Project {
// //   title: string;
// //   description: string;
// //   category: string;
// //   github: string;
// //   demo: string;
// //   images: string[]; // Add this field to include images
// // }

// // const ProjectContainer = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   flexDirection: 'column',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   minHeight: '100vh',
// //   padding: theme.spacing(4),
// // }));

// // const ProjectCard = styled(Box)(({ theme }) => ({
// //   width: '350px',
// //   padding: theme.spacing(2),
// //   marginBottom: theme.spacing(2),
// //   marginRight: theme.spacing(2),
// //   background: 'var(--container-color)',
// //   borderRadius: '1rem',
// //   transition: 'transform 0.2s ease-in-out',
// //   border: '1px solid #ddd',
// //   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
// //   overflow: 'hidden',
// //   '&:hover': {
// //     transform: 'scale(1.05)',
// //     boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
// //     '& .description': {
// //       whiteSpace: 'normal',
// //       overflow: 'visible',
// //     },
// //   },
// // }));

// // const ProjectDescription = styled(Typography)(() => ({
// //   overflow: 'hidden',
// //   textOverflow: 'ellipsis',
// //   whiteSpace: 'nowrap',
// //   transition: 'white-space 0.2s ease-in-out, overflow 0.2s ease-in-out',
// // }));

// // const Project: React.FC = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedCategory, setSelectedCategory] = useState('');
// //   const [projectsData, setProjectsData] = useState<Project[]>([]);

// //   useEffect(() => {
// //     fetchProjects();
// //   }, []);

// //   const fetchProjects = async () => {
// //     try {
// //       const response = await fetch('http://localhost:3000/projects');
// //       if (response.ok) {
// //         const data = await response.json();
// //         setProjectsData(data);
// //       } else {
// //         console.error('Failed to fetch projects');
// //       }
// //     } catch (err) {
// //       console.error('Error:', err);
// //     }
// //   };

// //   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     setSearchTerm(event.target.value);
// //   };

// //   const handleCategoryFilter = (category: string) => {
// //     setSelectedCategory(category);
// //   };

// //   const filteredProjects = projectsData.filter(
// //     (project) =>
// //       (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
// //       (selectedCategory === '' || project.category === selectedCategory)
// //   );

// //   return (
// //     <>
// //       <Navbar />
// //       <ProjectContainer id="projects">
// //         <Typography variant="h4" align="center" gutterBottom>
// //           Projects
// //         </Typography>
// //         <Typography variant="subtitle2" align="center" gutterBottom>
// //           Create + Collaborate
// //         </Typography>

// //         <Autocomplete
// //           freeSolo
// //           disableClearable
// //           value={searchTerm}
// //           onChange={(_, value) => setSearchTerm(value)}
// //           options={projectsData.map((project) => project.title)}
// //           renderInput={(params) => (
// //             <TextField
// //               {...params}
// //               label="Search Projects"
// //               variant="outlined"
// //               size="small"
// //               value={searchTerm}
// //               onChange={handleSearchChange}
// //               style={{ marginBottom: '16px', width: '300px' }}
// //               sx={{
// //                 '& .MuiOutlinedInput-root': {
// //                   '&.Mui-focused fieldset': {
// //                     borderColor: '#76885B',
// //                   },
// //                 },
// //                 '& .MuiInputLabel-root': {
// //                   '&.Mui-focused': {
// //                     color: '#76885B',
// //                   },
// //                 },
// //               }}
// //             />
// //           )}
// //         />
// //         <Box marginBottom="16px">
// //           <Button
// //             variant={selectedCategory === '' ? 'contained' : 'outlined'}
// //             onClick={() => handleCategoryFilter('')}
// //             style={{
// //               marginRight: '8px',
// //               backgroundColor: selectedCategory === '' ? '#76885B' : 'transparent',
// //               color: selectedCategory === '' ? '#fff' : '#76885B',
// //               borderRadius: '20px',
// //               border: '1px solid #76885B',
// //               padding: '5px 15px',
// //               textTransform: 'none',
// //             }}
// //           >
// //             All
// //           </Button>
// //           {['Data Science', 'Machine Learning/AI', 'Web Development', 'Cloud & DevOps', 'Freelance'].map(
// //             (category) => (
// //               <Button
// //                 key={category}
// //                 variant={selectedCategory === category ? 'contained' : 'outlined'}
// //                 onClick={() => handleCategoryFilter(category)}
// //                 style={{
// //                   marginRight: '8px',
// //                   backgroundColor: selectedCategory === category ? '#76885B' : 'transparent',
// //                   color: selectedCategory === category ? '#fff' : '#76885B',
// //                   borderRadius: '20px',
// //                   border: '1px solid #76885B',
// //                   padding: '5px 15px',
// //                   textTransform: 'none',
// //                 }}
// //               >
// //                 {category}
// //               </Button>
// //             )
// //           )}
// //         </Box>
// //         <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
// //           {filteredProjects.map((project, index) => (
// //             <ProjectCard key={index}>
// //               <Typography variant="h6" align="center" style={{ fontSize: '18px', color: '#76885B' }}>
// //                 {project.title}
// //               </Typography>
// //               <ProjectDescription variant="body2" align="center" className="description">
// //                 {project.description}
// //               </ProjectDescription>
// //               {project.images && project.images.length > 0 && (
// //                 <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" marginTop="8px">
// //                   {project.images.map((image, imgIndex) => (
// //                     <img
// //                       key={imgIndex}
// //                       src={`/src/images/${image}`}
// //                       alt={image}
// //                       style={{ height: '30px', margin: '5px' }}
// //                     />
// //                   ))}
// //                 </Box>
// //               )}
// //               <Box display="flex" justifyContent="space-between" width="100%" marginTop="8px">
// //                 <Button
// //                   variant="text"
// //                   startIcon={<GitHub />}
// //                   href={project.github}
// //                   target="_blank"
// //                   style={{
// //                     color: '#76885B',
// //                   }}
// //                 >
// //                   GitHub
// //                 </Button>
// //                 <Button
// //                   variant="text"
// //                   startIcon={<Visibility />}
// //                   href={project.demo}
// //                   target="_blank"
// //                   style={{
// //                     color: '#76885B',
// //                   }}
// //                 >
// //                   Live Demo
// //                 </Button>
// //               </Box>
// //             </ProjectCard>
// //           ))}
// //         </Box>
// //       </ProjectContainer>
// //     </>
// //   );
// // };

// // export default Project;


// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button, Typography, styled, Autocomplete } from '@mui/material';
// import { GitHub, Visibility } from '@mui/icons-material';
// import Navbar from '../components/Navbar';

// interface Project {
//   title: string;
//   description: string;
//   category: string;
//   github: string;
//   demo: string;
//   images: string[]; // Add this field to include images
// }

// const ProjectContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   minHeight: '100vh',
//   padding: theme.spacing(4),
// }));

// const ProjectCard = styled(Box)(({ theme }) => ({
//   width: '350px',
//   padding: theme.spacing(2),
//   marginBottom: theme.spacing(2),
//   marginRight: theme.spacing(2),
//   background: 'var(--container-color)',
//   borderRadius: '1rem',
//   transition: 'transform 0.2s ease-in-out',
//   border: '1px solid #ddd',
//   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   overflow: 'hidden',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
//     '& .description': {
//       whiteSpace: 'normal',
//       overflow: 'visible',
//     },
//   },
// }));

// const ProjectDescription = styled(Typography)(() => ({
//   overflow: 'hidden',
//   textOverflow: 'ellipsis',
//   whiteSpace: 'nowrap',
//   transition: 'white-space 0.2s ease-in-out, overflow 0.2s ease-in-out',
// }));

// const Project: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [includeDemo, setIncludeDemo] = useState(false); // New state for including demo
//   const [projectsData, setProjectsData] = useState<Project[]>([]);

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/projects');
//       if (response.ok) {
//         const data = await response.json();
//         setProjectsData(data);
//       } else {
//         console.error('Failed to fetch projects');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//     }
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleCategoryFilter = (category: string) => {
//     setSelectedCategory(category);
//   };

//   const handleIncludeDemo = () => {
//     setIncludeDemo(!includeDemo);
//   };

//   const filteredProjects = projectsData.filter(
//     (project) =>
//       (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
//       (selectedCategory === '' || project.category === selectedCategory) &&
//       (includeDemo ? project.demo !== '' : true)
//   );

//   return (
//     <>
//       <Navbar />
//       <ProjectContainer id="projects">
//         <Typography variant="h4" align="center" gutterBottom>
//           Projects
//         </Typography>
//         <Typography variant="subtitle2" align="center" gutterBottom>
//           Create + Collaborate
//         </Typography>

//         <Autocomplete
//           freeSolo
//           disableClearable
//           value={searchTerm}
//           onChange={(_, value) => setSearchTerm(value)}
//           options={projectsData.map((project) => project.title)}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="Search Projects"
//               variant="outlined"
//               size="small"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               style={{ marginBottom: '16px', width: '300px' }}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#76885B',
//                   },
//                 },
//                 '& .MuiInputLabel-root': {
//                   '&.Mui-focused': {
//                     color: '#76885B',
//                   },
//                 },
//               }}
//             />
//           )}
//         />
//         <Box marginBottom="16px">
//           <Button
//             variant={selectedCategory === '' ? 'contained' : 'outlined'}
//             onClick={() => handleCategoryFilter('')}
//             style={{
//               marginRight: '8px',
//               backgroundColor: selectedCategory === '' ? '#76885B' : 'transparent',
//               color: selectedCategory === '' ? '#fff' : '#76885B',
//               borderRadius: '20px',
//               border: '1px solid #76885B',
//               padding: '5px 15px',
//               textTransform: 'none',
//             }}
//           >
//             All
//           </Button>
//           {['Data Science', 'Machine Learning/AI', 'Web Development', 'Cloud & DevOps', 'Freelance'].map(
//             (category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? 'contained' : 'outlined'}
//                 onClick={() => handleCategoryFilter(category)}
//                 style={{
//                   marginRight: '8px',
//                   backgroundColor: selectedCategory === category ? '#76885B' : 'transparent',
//                   color: selectedCategory === category ? '#fff' : '#76885B',
//                   borderRadius: '20px',
//                   border: '1px solid #76885B',
//                   padding: '5px 15px',
//                   textTransform: 'none',
//                 }}
//               >
//                 {category}
//               </Button>
//             )
//           )}
//           <Button
//             variant={includeDemo ? 'contained' : 'outlined'}
//             onClick={handleIncludeDemo}
//             style={{
//               marginRight: '8px',
//               backgroundColor: includeDemo ? '#76885B' : 'transparent',
//               color: includeDemo ? '#fff' : '#76885B',
//               borderRadius: '20px',
//               border: '1px solid #76885B',
//               padding: '5px 15px',
//               textTransform: 'none',
//             }}
//           >
//             Include Demo
//           </Button>
//         </Box>
//         <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
//           {filteredProjects.map((project, index) => (
//             <ProjectCard key={index}>
//               <Typography variant="h6" align="center" style={{ fontSize: '18px', color: '#76885B' }}>
//                 {project.title}
//               </Typography>
//               <ProjectDescription variant="body2" align="center" className="description">
//                 {project.description}
//               </ProjectDescription>
//               {project.images && project.images.length > 0 && (
//                 <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" marginTop="8px">
//                   {project.images.map((image, imgIndex) => (
//                     <img
//                       key={imgIndex}
//                       src={`/src/images/${image}`}
//                       alt={image}
//                       style={{ height: '30px', margin: '5px' }}
//                     />
//                   ))}
//                 </Box>
//               )}
//               <Box display="flex" justifyContent="space-between" width="100%" marginTop="8px">
//                 <Button
//                   variant="text"
//                   startIcon={<GitHub />}
//                   href={project.github}
//                   target="_blank"
//                   style={{
//                     color: '#76885B',
//                   }}
//                 >
//                   GitHub
//                 </Button>
//                 {project.demo && (
//                   <Button
//                     variant="text"
//                     startIcon={<Visibility />}
//                     href={project.demo}
//                     target="_blank"
//                     style={{
//                       color: '#76885B',
//                     }}
//                   >
//                     Live Demo
//                   </Button>
//                 )}
//               </Box>
//             </ProjectCard>
//           ))}
//         </Box>
//       </ProjectContainer>
//     </>
//   );
// };

// export default Project;

import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, styled, Autocomplete } from '@mui/material';
import { GitHub, Visibility } from '@mui/icons-material';
import Navbar from '../components/Navbar';

interface Project {
  title: string;
  description: string;
  category: string;
  github: string;
  demo: string;
  images: string[]; // Add this field to include images
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
  marginRight: theme.spacing(2),
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

const Project: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  // const [includeDemo, setIncludeDemo] = useState(false); // New state for including demo
  const [projectsData, setProjectsData] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:3000/projects');
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
  };

  // const handleIncludeDemo = () => {
  //   setIncludeDemo(!includeDemo);
  // };

  const filteredProjects = projectsData.filter(
    (project) =>
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === '' || project.category === selectedCategory) 
      // (includeDemo ? project.demo !== '' : true)
  );

  return (
    <>
      <Navbar />
      <ProjectContainer id="projects">
        <Typography variant="h4" align="center" gutterBottom>
          Projects
        </Typography>
        <Typography variant="subtitle2" align="center" gutterBottom>
          Create + Collaborate
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
        <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
          {filteredProjects.map((project, index) => (
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
                      src={`/src/images/${image}`}
                      alt={image}
                      style={{ height: '30px', margin: '5px' }}
                    />
                  ))}
                </Box>
              )}
              <Box display="flex" justifyContent="space-between" width="100%" marginTop="8px">
                {project.demo ? (
                  <Button
                    variant="text"
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                    style={{
                      color: '#76885B',
                    }}
                  >
                    GitHub
                  </Button>
                ) : (
                  <Box display="flex" justifyContent="center" width="100%">
                    <Button
                      variant="text"
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                      style={{
                        color: '#76885B',
                      }}
                    >
                      GitHub
                    </Button>
                  </Box>
                )}
                {project.demo && (
                  <Button
                    variant="text"
                    startIcon={<Visibility />}
                    href={project.demo}
                    target="_blank"
                    style={{
                      color: '#76885B',
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </Box>
            </ProjectCard>
          ))}
        </Box>
      </ProjectContainer>
    </>
  );
};

export default Project;