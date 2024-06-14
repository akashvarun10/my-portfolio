// // import { useEffect, useRef } from 'react';
// // import Navbar from '../components/Navbar';
// // import SocialLinks from '../components/SocialLinks';
// // import { Box, Typography, styled} from '@mui/material';
// // import Typed from 'typed.js';

// // const HeroContainer = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   flexDirection: 'row',
// //   alignItems: 'center',
// //   justifyContent: 'space-between',
// //   minHeight: '100vh',
// //   padding: theme.spacing(4),
// //   [theme.breakpoints.down('sm')]: {
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //   },
// // }));

// // const TextContainer = styled(Box)(({ theme }) => ({
// //   flex: 1,
// //   display: 'flex',
// //   flexDirection: 'column',
// //   justifyContent: 'center',
// //   animation: 'fadeInAnimation 1s ease-in-out',
// //   [theme.breakpoints.up('sm')]: {
// //     marginRight: theme.spacing(4),
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     textAlign: 'center',
// //     marginBottom: theme.spacing(4),
// //   },
// // }));

// // const NameText = styled(Typography)(({ theme }) => ({
// //   fontSize: '4rem',
// //   fontWeight: 'bold',
// //   color: '#76885B',
// //   animation: 'slideInAnimation 1s ease-in-out',
// //   [theme.breakpoints.down('sm')]: {
// //     fontSize: '3rem',
// //   },
// // }));

// // const DescriptionText = styled(Typography)(({ theme }) => ({
// //   fontSize: '1.5rem',
// //   marginTop: theme.spacing(2),
// //   animation: 'fadeInAnimation 1.5s ease-in-out',
// // }));

// // const AdditionalText = styled(Typography)(({ theme }) => ({
// //   fontSize: '1.2rem',
// //   marginTop: theme.spacing(2),
// //   animation: 'fadeInAnimation 2s ease-in-out',
// //   color: theme.palette.text.secondary,
// // }));

// // const PictureContainer = styled(Box)(({ theme }) => ({
// //   flexShrink: 0,
// //   display: 'flex',
// //   justifyContent: 'center',
// //   alignItems: 'center',
// //   width: '300px',
// //   height: '300px',
// //   marginRight: 60,
// //   overflow: 'hidden',
// //   borderRadius: '50%',
// //   boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
// //   transition: 'transform 0.3s ease-in-out',
// //   '&:hover img': {
// //     transform: 'scale(1.1)',
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     width: '400px',
// //     height: '400px',
// //   },
// // }));

// // const Picture = styled('img')({
// //   width: '100%',
// //   height: '100%',
// //   objectFit: 'cover',
// //   transition: 'transform 0.3s ease-in-out',
// // });


// // const Hero = () => {
// //   const typedElement = useRef(null);

// //   useEffect(() => {
// //     const typed = new Typed(typedElement.current, {
// //       strings: ['Akash Varun'],
// //       typeSpeed: 50,
// //       backSpeed: 10,
// //       backDelay: 2000,
// //       loop: true,
// //     });

// //     return () => {
// //       typed.destroy();
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <Navbar />
// //       <HeroContainer id="hero">
// //         <TextContainer>
// //           <NameText><span ref={typedElement}></span></NameText>
// //           <DescriptionText>
// //             I'm a Grad Student, Programmer, Researcher, Tech Enthusiast
// //           </DescriptionText>
// //           <AdditionalText>
// //             A passionate full-stack developer and data scientist specializing in AI and machine learning. Currently pursuing my Master's in Information Systems at Northeastern University, I excel in creating innovative solutions using cutting-edge technologies.
// //           </AdditionalText>
// //           <Typography variant="body1" paragraph>
// //             AI Researcher & Developer.<br />
// //             Graduate Student @Northeastern University Boston MA | Product @Airdonex | Computer Vision Lead @ SCRO | HPAIR'22 Delegate.
// //           </Typography>
// //           <SocialLinks />
// //         </TextContainer>
// //         <PictureContainer>
// //           <Picture src="/src/images/my-picture.JPG" alt="My Picture" />
// //         </PictureContainer>
// //       </HeroContainer>
// //     </>
// //   );
// // };

// // export default Hero;

// // import { useEffect, useRef } from 'react';
// // import Navbar from '../components/Navbar';
// // import SocialLinks from '../components/SocialLinks';
// // import { Box, Typography, styled } from '@mui/material';
// // import Typed from 'typed.js';

// // const HeroContainer = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   flexDirection: 'row',
// //   alignItems: 'center',
// //   justifyContent: 'space-between',
// //   minHeight: '100vh',
// //   padding: theme.spacing(4),
// //   [theme.breakpoints.down('sm')]: {
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //   },
// //   [theme.breakpoints.down('xs')]: {
// //     padding: theme.spacing(2),
// //   },
// // }));

// // const TextContainer = styled(Box)(({ theme }) => ({
// //   flex: 1,
// //   display: 'flex',
// //   flexDirection: 'column',
// //   justifyContent: 'center',
// //   animation: 'fadeInAnimation 1s ease-in-out',
// //   [theme.breakpoints.up('sm')]: {
// //     marginRight: theme.spacing(4),
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     textAlign: 'center',
// //     marginBottom: theme.spacing(4),
// //   },
// //   [theme.breakpoints.down('xs')]: {
// //     padding: theme.spacing(2),
// //   },
// // }));

// // const NameText = styled(Typography)(({ theme }) => ({
// //   fontSize: '4rem',
// //   fontWeight: 'bold',
// //   color: '#76885B',
// //   animation: 'slideInAnimation 1s ease-in-out',
// //   [theme.breakpoints.down('sm')]: {
// //     fontSize: '2.5rem',
// //   },
// //   [theme.breakpoints.down('xs')]: {
// //     fontSize: '2rem',
// //   },
// // }));

// // const DescriptionText = styled(Typography)(({ theme }) => ({
// //   fontSize: '1.5rem',
// //   marginTop: theme.spacing(2),
// //   animation: 'fadeInAnimation 1.5s ease-in-out',
// //   [theme.breakpoints.down('sm')]: {
// //     fontSize: '1.2rem',
// //     marginBottom: theme.spacing(1),
// //   },
// //   [theme.breakpoints.down('xs')]: {
// //     fontSize: '1rem',
// //   },
// // }));

// // const AdditionalText = styled(Typography)(({ theme }) => ({
// //   fontSize: '1.2rem',
// //   marginTop: theme.spacing(2),
// //   animation: 'fadeInAnimation 2s ease-in-out',
// //   color: theme.palette.text.secondary,
// //   [theme.breakpoints.down('sm')]: {
// //     fontSize: '1rem',
// //   },
// //   [theme.breakpoints.down('xs')]: {
// //     fontSize: '0.8rem',
// //   },
// // }));

// // const PictureContainer = styled(Box)(({ theme }) => ({
// //   flexShrink: 0,
// //   display: 'flex',
// //   justifyContent: 'center',
// //   alignItems: 'center',
// //   width: '300px',
// //   height: '300px',
// //   marginRight: 60,
// //   overflow: 'hidden',
// //   borderRadius: '50%',
// //   boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
// //   transition: 'transform 0.3s ease-in-out',
// //   '&:hover img': {
// //     transform: 'scale(1.1)',
// //   },
// //   [theme.breakpoints.down('sm')]: {
// //     width: '200px',
// //     height: '200px',
// //     marginRight: 0,
// //   },
// //   [theme.breakpoints.down('xs')]: {
// //     width: '150px',
// //     height: '150px',
// //   },
// // }));

// // const Picture = styled('img')({
// //   width: '100%',
// //   height: '100%',
// //   objectFit: 'cover',
// //   transition: 'transform 0.3s ease-in-out',
// // });

// // const Hero = () => {
// //   const typedElement = useRef(null);

// //   useEffect(() => {
// //     const typed = new Typed(typedElement.current, {
// //       strings: ['Akash Varun'],
// //       typeSpeed: 50,
// //       backSpeed: 10,
// //       backDelay: 2000,
// //       loop: true,
// //     });

// //     return () => {
// //       typed.destroy();
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <Navbar />
// //       <HeroContainer id="hero">
// //         <TextContainer>
// //           <NameText><span ref={typedElement}></span></NameText>
// //           <DescriptionText>
// //             I'm a Grad Student, Programmer, Researcher, Tech Enthusiast
// //           </DescriptionText>
// //           <AdditionalText>
// //             A passionate full-stack developer and data scientist specializing in AI and machine learning. Currently pursuing my Master's in Information Systems at Northeastern University, I excel in creating innovative solutions using cutting-edge technologies.
// //           </AdditionalText>
// //           <Typography variant="body1" paragraph>
// //             AI Researcher & Developer.<br />
// //             Graduate Student @Northeastern University Boston MA | Product @Airdonex | Computer Vision Lead @ SCRO | HPAIR'22 Delegate.
// //           </Typography>
// //           <SocialLinks />
// //         </TextContainer>
// //         <PictureContainer>
// //           <Picture src="/src/images/my-picture.JPG" alt="My Picture" />
// //         </PictureContainer>
// //       </HeroContainer>
// //     </>
// //   );
// // };

// // export default Hero;

// // // import { useEffect, useRef } from 'react';
// // // import Navbar from '../components/Navbar';
// // // import SocialLinks from '../components/SocialLinks';
// // // import { Box, Typography, styled } from '@mui/material';
// // // import Typed from 'typed.js';

// // // const HeroContainer = styled(Box)(({ theme }) => ({
// // //   display: 'flex',
// // //   flexDirection: 'row',
// // //   alignItems: 'center',
// // //   justifyContent: 'center',
// // //   minHeight: '100vh',
// // //   padding: theme.spacing(4),
// // //   [theme.breakpoints.down('md')]: {
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     padding: theme.spacing(2),
// // //     textAlign: 'center',
// // //   },
// // // }));

// // // const TextContainer = styled(Box)(({ theme }) => ({
// // //   flex: 1,
// // //   display: 'flex',
// // //   flexDirection: 'column',
// // //   justifyContent: 'center',
// // //   [theme.breakpoints.up('md')]: {
// // //     marginRight: theme.spacing(4),
// // //   },
// // //   [theme.breakpoints.down('md')]: {
// // //     marginBottom: theme.spacing(4),
// // //     alignItems: 'center',
// // //   },
// // // }));

// // // const NameText = styled(Typography)(({ theme }) => ({
// // //   fontSize: '3rem',
// // //   fontWeight: 'bold',
// // //   color: '#76885B',
// // //   [theme.breakpoints.down('md')]: {
// // //     fontSize: '2.5rem',
// // //   },
// // //   [theme.breakpoints.down('sm')]: {
// // //     fontSize: '2rem',
// // //   },
// // // }));

// // // const DescriptionText = styled(Typography)(({ theme }) => ({
// // //   fontSize: '1.5rem',
// // //   marginTop: theme.spacing(2),
// // //   [theme.breakpoints.down('md')]: {
// // //     fontSize: '1.2rem',
// // //     marginBottom: theme.spacing(1),
// // //   },
// // //   [theme.breakpoints.down('sm')]: {
// // //     fontSize: '1rem',
// // //   },
// // // }));

// // // const AdditionalText = styled(Typography)(({ theme }) => ({
// // //   fontSize: '1.2rem',
// // //   marginTop: theme.spacing(2),
// // //   color: theme.palette.text.secondary,
// // //   [theme.breakpoints.down('md')]: {
// // //     fontSize: '1rem',
// // //   },
// // //   [theme.breakpoints.down('sm')]: {
// // //     fontSize: '0.8rem',
// // //   },
// // // }));

// // // const PictureContainer = styled(Box)(({ theme }) => ({
// // //   flexShrink: 0,
// // //   display: 'flex',
// // //   justifyContent: 'center',
// // //   alignItems: 'center',
// // //   width: '250px',
// // //   height: '250px',
// // //   marginRight: theme.spacing(4),
// // //   overflow: 'hidden',
// // //   borderRadius: '50%',
// // //   boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
// // //   transition: 'transform 0.3s ease-in-out',
// // //   '&:hover img': {
// // //     transform: 'scale(1.1)',
// // //   },
// // //   [theme.breakpoints.down('md')]: {
// // //     width: '200px',
// // //     height: '200px',
// // //     marginRight: 0,
// // //   },
// // //   [theme.breakpoints.down('sm')]: {
// // //     width: '150px',
// // //     height: '150px',
// // //   },
// // // }));

// // // const Picture = styled('img')({
// // //   width: '100%',
// // //   height: '100%',
// // //   objectFit: 'cover',
// // //   transition: 'transform 0.3s ease-in-out',
// // // });

// // // const Hero = () => {
// // //   const typedElement = useRef<HTMLSpanElement>(null);

// // //   useEffect(() => {
// // //     const typed = new Typed(typedElement.current!, {
// // //       strings: ['Akash Varun'],
// // //       typeSpeed: 50,
// // //       backSpeed: 10,
// // //       backDelay: 2000,
// // //       loop: true,
// // //     });

// // //     return () => {
// // //       typed.destroy();
// // //     };
// // //   }, []);

// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <HeroContainer id="hero">
// // //         <TextContainer>
// // //           <NameText>
// // //             <span ref={typedElement}></span>
// // //           </NameText>
// // //           <DescriptionText>
// // //             I'm a Grad Student, Programmer, Researcher, Tech Enthusiast
// // //           </DescriptionText>
// // //           <AdditionalText>
// // //             A passionate full-stack developer and data scientist specializing in AI and machine learning. Currently pursuing my Master's in Information Systems at Northeastern University, I excel in creating innovative solutions using cutting-edge technologies.
// // //           </AdditionalText>
// // //           <Typography variant="body1" paragraph>
// // //             AI Researcher & Developer.<br />
// // //             Graduate Student @Northeastern University Boston MA | Product @Airdonex | Computer Vision Lead @ SCRO | HPAIR'22 Delegate.
// // //           </Typography>
// // //           <SocialLinks />
// // //         </TextContainer>
// // //         <PictureContainer>
// // //           <Picture src="/src/images/my-picture.JPG" alt="My Picture" />
// // //         </PictureContainer>
// // //       </HeroContainer>
// // //     </>
// // //   );
// // // };

// // // export default Hero;

import { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import { Box, Typography, styled, CssBaseline } from '@mui/material';
import Typed from 'typed.js';
import { createGlobalStyle } from 'styled-components';

// Global styles to ensure the body and html occupy the full height
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent horizontal overflow */
  }
`;

const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Ensures the container takes full viewport height
  padding: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
}));



const TextContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  maxWidth: '100%',
  [theme.breakpoints.down('md')]: {
    marginRight: 0,
    textAlign: 'center', // Center align text on smaller screens
  },
}));

const NameText = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#76885B',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginTop: theme.spacing(2),
  overflowWrap: 'break-word',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const AdditionalText = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  marginTop: theme.spacing(2),
  color: theme.palette.text.secondary,
  overflowWrap: 'break-word',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const PictureContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: '250px',
  height: '250px',
  marginRight: theme.spacing(2),
  overflow: 'hidden',
  borderRadius: '50%',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover img': {
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('md')]: {
    width: '200px',
    height: '200px',
    marginRight: 0,
    marginBottom: theme.spacing(2), // Add margin bottom for spacing in column layout
  },
  [theme.breakpoints.down('sm')]: {
    width: '150px',
    height: '150px',
  },
}));

const Picture = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out',
});

const Hero = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current!, {
      strings: ['Akash Varun'],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <HeroContainer id="home">
        <Navbar />
        <TextContainer>
          <NameText>
            <span ref={typedElement}></span>
          </NameText>
          <DescriptionText>
            I'm a Grad Student, Programmer, Researcher, Tech Enthusiast
          </DescriptionText>
          <AdditionalText>
            A passionate full-stack developer and data scientist specializing in AI and machine learning. Currently pursuing my Master's in Information Systems at Northeastern University, I excel in creating innovative solutions using cutting-edge technologies.
          </AdditionalText>
          <Typography variant="body1" paragraph>
            AI Researcher & Developer.<br />
            Graduate Student @Northeastern University Boston MA | Product @Airdonex | Computer Vision Lead @ SCRO | HPAIR'22 Delegate.
          </Typography>
          <SocialLinks />
        </TextContainer>
        <PictureContainer>
          <Picture src="/src/images/my-picture.JPG" alt="My Picture" />
        </PictureContainer>
      </HeroContainer>
    </>
  );
};

export default Hero;





