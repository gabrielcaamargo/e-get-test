import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <Link to="/">
          Back
      </Link>

      <h1>Page not found. Get back to home.</h1>
    </Container>
  );
}
