import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Stack, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggleButton from './ThemeToggleButton';
import brandImage from '../assets/Intro/brand.png';

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeNav();
    }
  };

  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#76885B' }}>
      <Toolbar sx={{ justifyContent: 'space-between', paddingX: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Box sx={{ flexShrink: 0, marginRight: { xs: 2, sm: 4 } }}>
          <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton
            onClick={toggleNav}
            color="inherit"
            aria-label="Toggle navigation"
          >
            <MenuIcon />
          </IconButton>
          <ThemeToggleButton />
        </Box>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, md: 2, lg: 3 }}
          alignItems="center"
          justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
          sx={{
            display: { xs: showNav ? 'flex' : 'none', md: 'flex' },
            width: { xs: '100%', md: 'auto' },
            marginTop: { xs: 2, md: 0 },
          }}
        >
          {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
            <Button key={item} color="inherit" onClick={() => handleScroll(item.toLowerCase())} sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
              {item}
            </Button>
          ))}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <ThemeToggleButton />
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
