import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import darkTheme from '../../assets/styles/themes/darkTheme';
import Router from '../../routes';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
