import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserRepos from './pages/UserRepos';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/repos' element={<UserRepos />} />
    </Routes>
  );
}
