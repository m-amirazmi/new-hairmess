import Dashboard from '../components/pages/barber/Dashboard';
import Login from '../components/pages/barber/Login';
import Profile from '../components/pages/barber/Profile';
import Register from '../components/pages/barber/Register';

export const routes = [
  // BARBER
  { path: '/barber/register', name: 'Register', component: Register },
  { path: '/barber/login', name: 'Login', component: Login },
  { path: '/barber/dashboard', name: 'Login', protected: true, component: Dashboard },
  { path: '/barber/dashboard/profile', name: 'Login', protected: true, component: Profile },
]