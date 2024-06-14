import Hero from './Hero';
import About from './About';
import { CssBaseline, Box } from '@mui/material';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Services from './Services';
import Experience from './Experience';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <>
      <CssBaseline />
      <Box>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Services />
        <Contact  />
        <Footer />
      </Box>
    </>
  );
}

export default MainPage;

