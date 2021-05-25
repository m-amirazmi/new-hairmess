import Login from '../components/pages/barber/Login';
import Register from '../components/pages/barber/Register';

export const routes = [
  // BARBER
  { path: '/barber/register', name: 'Register', component: Register },
  { path: '/barber/login', name: 'Login', component: Login },
]