import { Button, Box, Tooltip } from '@mui/material';
import { FaLinkedin, FaGithub, FaMedium, FaFileAlt } from 'react-icons/fa';

const SocialLinks = () => {
  const iconStyle = {
    backgroundColor: 'white',
    color: '#76885B',
    borderRadius: '50%',
    padding: '10px',
    minWidth: 'unset',
    margin: '0 10px', // Adds space between icons
    transition: 'background-color 0.3s, color 0.3s', // Add transition effect
    '&:hover': {
      backgroundColor: '#76885B',
      color: 'white',
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
          href="path/to/resume.pdf"
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