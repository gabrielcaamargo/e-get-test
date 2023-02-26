import { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import darkTheme from '../../assets/styles/themes/darkTheme';
import lightTheme from '../../assets/styles/themes/lightTheme';

import Router from '../../routes';
import Header from '../Header';
import UserStore from '../../redux/user/UserStore';
import { Container } from './styles';

export default function App() {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme(prevState => {
      const themeChanged = prevState === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', themeChanged);
      return themeChanged;
    });
  }

  const currentTheme = useMemo(() => {
    return localStorage.getItem('theme') || 'dark';
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Container>
            <Header toggleTheme={handleToggleTheme} />
            <Provider store={UserStore}>
              <Router />
            </Provider>
          </Container>
        </ThemeContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
