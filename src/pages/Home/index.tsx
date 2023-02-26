import { useEffect, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import Search from '../../components/Search';
import { Container } from './styles';

export default function Home() {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if(isFirstRender.current) {
      setTimeout(() => {
        toast.success('Welcome!', {
          position: 'top-right'
        });
      }, 700);
      isFirstRender.current = false;
      return;
    }

    setTimeout(() => {
      toast.success('Welcome back!', {
        position: 'top-right'
      });
    }, 700);
  }, []);

  return (
    <Container>
      <Search />
      <ToastContainer
        position="top-right"
      />
    </Container>
  );
}
