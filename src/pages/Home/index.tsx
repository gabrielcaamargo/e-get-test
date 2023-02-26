import { useEffect, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import Search from '../../components/Search';
import { Container } from './styles';

export default function Home() {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if(isFirstRender.current) {
      toast.success('Welcome!');
      isFirstRender.current = false;
      return;
    }

    toast.success('Welcome back!');
  }, []);

  return (
    <Container>
      <Search />
      <ToastContainer />
    </Container>
  );
}
