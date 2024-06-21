import { Button, Box, Tooltip } from '@mui/material';
import { FaLinkedin, FaGithub, FaMedium, FaFileAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

const SocialLinks = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('SocialLinks must be used within a ThemeProvider');
  }

  const { mode } = themeContext;

  const iconStyle = {
    backgroundColor: mode === 'dark' ? '#333' : 'white',
    color: mode === 'dark' ? 'white' : '#76885B',
    borderRadius: '50%',
    padding: '10px',
    minWidth: 'unset',
    margin: '0 10px', // Adds space between icons
    transition: 'background-color 0.3s, color 0.3s', // Add transition effect
    '&:hover': {
      backgroundColor: mode === 'dark' ? 'white' : '#76885B',
      color: mode === 'dark' ? '#333' : 'white',
      transform: 'scale(1.2)', // Add scale effect on hover
      zIndex: 2, // Ensure the hovered icon is on top
    },
    fontSize: '24px', // Ensure all icons are the same size
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start', // Align icons to the left
        marginTop: '20px',
      }}
    >
      <Tooltip title="LinkedIn">
        <Button
          color="inherit"
          href="https://www.linkedin.com/in/akash9varun/"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyle}
        >
          <FaLinkedin />
        </Button>
      </Tooltip>
      <Tooltip title="GitHub">
        <Button
          color="inherit"
          href="https://github.com/akashvarun10"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyle}
        >
          <FaGithub />
        </Button>
      </Tooltip>
      <Tooltip title="Medium">
        <Button
          color="inherit"
          href="https://akashvarunp.medium.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyle}
        >
          <FaMedium />
        </Button>
      </Tooltip>
      <Tooltip title="Resume">
        <Button
          color="inherit"
          href="https://drive.google.com/drive/folders/1CihVOr6dR1Ee4TeKAO_-ADw7F3uP5IWC"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyle}
        >
          <FaFileAlt />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default SocialLinks;