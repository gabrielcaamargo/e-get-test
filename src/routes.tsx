import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UserRepos from './pages/UserRepos';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/repos' element={<UserRepos />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}
