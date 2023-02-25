import { ThemeContext } from '../../contexts/ThemeContext';
import { Container, ThemeSwitcher, Title } from './styles';

import Sun from '../../assets/images/sun.png';
import Moon from '../../assets/images/moon.png';

interface HeaderProps {
  toggleTheme: () => void;
}

export default function Header({toggleTheme}:HeaderProps) {
  const theme = localStorage.getItem('theme');
  return (
    <Container>
      <ThemeSwitcher onClick={toggleTheme}>
        {theme === 'dark' ? <img src={Sun} alt='Sun'  /> : <img src={Moon} alt='Moon'  />}
      </ThemeSwitcher>

      <Title>GitHub Profile <span>Explorer</span>.</Title>
    </Container>
  );
}
