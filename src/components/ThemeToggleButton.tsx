// src/components/ThemeToggleButton.tsx
import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeContext } from '../theme/ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeToggleButton must be used within a ThemeProvider');
  }

  const { toggleTheme, mode } = themeContext;

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggleButton;
