// import { Box, Typography, styled} from '@mui/material';
// import Navbar from '../components/Navbar';

// const AboutContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center', // Center vertically
//   justifyContent: 'center',
//   minHeight: '100vh',
//   padding: theme.spacing(4),
//   [theme.breakpoints.down('sm')]: {
//     flexDirection: 'column',
//   },
// }));

// const ImageContainer = styled(Box)(({ theme }) => ({
//   flexShrink: 0,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '300px',
//   height: '500px',
//   overflow: 'hidden',
//   borderRadius: '25px',
//   boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
//   marginRight: theme.spacing(4),
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.1)',
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: '200px',
//     height: '350px',
//     marginRight: 0,
//     marginBottom: theme.spacing(4),
//   },
// }));

// const Image = styled('img')({
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
// });

// const TextContainer = styled(Box)(({ theme }) => ({
//   flex: 1,
//   display: 'flex', // Added
//   flexDirection: 'column', // Added
//   alignItems: 'flex-start', // Align text to start
//   justifyContent: 'center', // Center vertically
//   [theme.breakpoints.down('sm')]: {
//     textAlign: 'center',
//     alignItems: 'center', // Center text vertically
//   },
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   fontSize: '2rem',
//   fontWeight: 'bold',
//   color: '#76885B',
//   marginBottom: theme.spacing(2),
// }));

// const BoldText = styled(Typography)(() => ({
//   fontWeight: 'bold',
// }));

// const ChipContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexWrap: 'wrap',
//   gap: theme.spacing(1),
// }));

// const Tag = styled(Typography)(({ theme }) => ({
//   display: 'inline-block',
//   backgroundColor: '#EEEEEE', // Background color updated
//   borderRadius: '15px',
//   padding: '4px 12px',
//   marginRight: theme.spacing(1),
//   marginBottom: theme.spacing(1),
//   color: '#333',
//   transition: 'background-color 0.3s ease-in-out',
//   '&:hover': {
//     backgroundColor: '#e0e0e0',
//   },
// }));


// const Badge = styled('img')({
//   width: '50px',
//   height: '50px',
//   margin: '10px',
// });

// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <AboutContainer id="about">
//         <ImageContainer>
//           <Image src="/src/images/my-picture.JPG" alt="Akash Varun" />
//         </ImageContainer>
//         <TextContainer>
//           <SectionTitle>About Me</SectionTitle>
//           <Box>
//             <Typography variant="h6" paragraph>
//               I'm Venkat Akash Varun Pemmaraju, a highly motivated graduate student pursuing a Master's degree in Information Systems at Northeastern University, Boston MA. My passion lies at the intersection of technology, data, and innovation, with a strong inclination towards AI, machine learning, and full-stack development.
//             </Typography>
//           </Box>
//           <Box>
//           <Box display="flex" justifyContent="center">
//             <Box display="flex" flexDirection="row" alignItems="center">
//               <Badge src="/src/images/intro/northeastern.png" alt="Northeastern University" />
//               <Typography variant="body1" paragraph>
//                 Master's degree, Information Systems at Northeastern University, Boston MA
//               </Typography>
//             </Box>
//             <Box display="flex" flexDirection="row" alignItems="center" ml={2}>
//               <Badge src="/src/images/intro/hpair.png" alt="Harvard Project for Asian and International Relations (HPAIR)'22 Delegate" />
//               <Typography variant="body1" paragraph>
//                 Harvard Project for Asian and International Relations (HPAIR)'22 Delegate
//               </Typography>
//             </Box>
//           </Box>
//           </Box>
//             <Typography variant="body1" paragraph>
//               <BoldText>Tech Interests:</BoldText><br />
//               <ChipContainer>
//                 <Tag>Data Science</Tag>
//                 <Tag>Deep Learning</Tag>
//                 <Tag>Computer Vision</Tag>
//                 <Tag>NLP</Tag>
//                 <Tag>DevOps</Tag>
//                 <Tag>Cloud Computing</Tag>
//                 <Tag>Full Stack Web Development</Tag>
//               </ChipContainer>
//             </Typography>
//             <BoldText>Currently Learning: Generative AI, MLOps, Cloud Computing</BoldText><br />
//             <Typography variant="body1" paragraph>
//               <BoldText>Other Interests:</BoldText><br />
//               <Tag>Tech Writing</Tag>
//               <Tag>Finance</Tag>
//               <Tag>Entrepreneurship</Tag>
//             </Typography>
//         </TextContainer>
//       </AboutContainer>
//     </>
//   );
// };

// export default About;



import { Box, Typography, styled } from '@mui/material';
import Navbar from '../components/Navbar';
import akashvarun from '../images/Intro/akashvarun.jpg';

const AboutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center', // Center vertically
  justifyContent: 'center',
  minHeight: '100vh',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '300px',
  height: '500px',
  overflow: 'hidden',
  borderRadius: '25px',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  marginRight: theme.spacing(4),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '200px',
    height: '350px',
    marginRight: 0,
    marginBottom: theme.spacing(4),
  },
}));

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const TextContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex', // Added
  flexDirection: 'column', // Added
  alignItems: 'flex-start', // Align text to start
  justifyContent: 'center', // Center vertically
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    alignItems: 'center', // Center text vertically
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#76885B',
  marginBottom: theme.spacing(2),
}));

const BoldText = styled(Typography)(() => ({
  fontWeight: 'bold',
}));

const ChipContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

const Tag = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: '#EEEEEE', // Background color updated
  borderRadius: '15px',
  padding: '4px 12px',
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  color: '#333',
  transition: 'background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

const Badge = styled('img')({
  width: '50px',
  height: '50px',
  margin: '10px',
});

const About = () => {
  return (
    <>
      <Navbar />
      <AboutContainer id="about">
        <ImageContainer>
          <Image src={akashvarun} alt="Akash Varun" />
        </ImageContainer>
        <TextContainer>
          <SectionTitle>About Me</SectionTitle>
          <Box>
            <Typography variant="h6" paragraph>
              I'm Venkat Akash Varun Pemmaraju, a highly motivated graduate student pursuing a Master's degree in Information Systems at Northeastern University, Boston MA. My passion lies at the intersection of technology, data, and innovation, with a strong inclination towards AI, machine learning, and full-stack development.
            </Typography>
          </Box>
          <Box>
            <Box display="flex" justifyContent="center">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Badge src="/src/images/intro/northeastern.png" alt="Northeastern University" />
                <Typography variant="body1" paragraph>
                  Master's degree, Information Systems at Northeastern University, Boston MA
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" alignItems="center" ml={2}>
                <Badge src="/src/images/intro/hpair.png" alt="Harvard Project for Asian and International Relations (HPAIR)'22 Delegate" />
                <Typography variant="body1" paragraph>
                  Harvard Project for Asian and International Relations (HPAIR)'22 Delegate
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography variant="body1" paragraph>
            <BoldText>Tech Interests:</BoldText><br />
            <ChipContainer>
              <Tag>Data Science</Tag>
              <Tag>Deep Learning</Tag>
              <Tag>Computer Vision</Tag>
              <Tag>NLP</Tag>
              <Tag>DevOps</Tag>
              <Tag>Cloud Computing</Tag>
              <Tag>Full Stack Web Development</Tag>
            </ChipContainer>
          </Typography>
          <BoldText>Currently Learning: Generative AI, MLOps, Cloud Computing</BoldText><br />
          <Typography variant="body1" paragraph>
            <BoldText>Other Interests:</BoldText><br />
            <Tag>Tech Writing</Tag>
            <Tag>Finance</Tag>
            <Tag>Entrepreneurship</Tag>
          </Typography>
        </TextContainer>
      </AboutContainer>
    </>
  );
};

export default About;

