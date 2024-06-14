// src/theme/ThemeContext.tsx
import React, { createContext, useState, useMemo, ReactNode } from 'react';
import { createTheme, ThemeProvider} from '@mui/material/styles';

interface ThemeContextType {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProviderComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderComponent;
