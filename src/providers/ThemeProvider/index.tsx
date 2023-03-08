import React, { useContext, useState } from 'react';
import { defaultTheme } from './theme';

const ThemeContext = React.createContext({
  theme: defaultTheme
});

export default function ThemeProvider(props: any) {
  const { children } = props;
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext);
}
