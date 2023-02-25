import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import darkTheme from '../../assets/styles/themes/darkTheme';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <h1>App</h1>
    </ThemeProvider>
  );
}
